const express = require('express');
const { Todo } = require('../mongo')
const redis = require('../redis')

const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  redis.INCR('todos')
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  try {
    req.todo = await Todo.findById(id)
    if (!req.todo) return res.sendStatus(404)
  } catch (e) {
    console.error('findById:', e.message)
    return res.sendStatus(400)
  }
  next()
}

/* DELETE todo. */
singleRouter.delete('/:id', async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id })
    res.sendStatus(200)
  } catch (e) {
    console.error('deleteOne failed:', e.message)
    res.sendStatus(500)
  }
});

/* GET todo. */
singleRouter.get('/:id', async (req, res) => {
  res.send(req.todo)
});

/* PUT todo. */
singleRouter.put('/:id', async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.todo._id, req.body, { returnDocument: 'after' })
    if (updated) return res.send(updated)
  } catch (e) {
    console.error('PUT /todos/:id', e.message)
    return res.sendStatus(500)
  }
  res.sendStatus(404)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = { router, singleRouter };
