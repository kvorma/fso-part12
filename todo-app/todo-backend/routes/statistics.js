const express = require('express');
const router = express.Router();
const redis = require('../redis')
const { Todo } = require('../mongo')

let todos = -1

router.get('/', async (req, res) => {
  if (todos === -1) {
    todos = await Todo.countDocuments({})
    if (redis.isReady) {
      await redis.set('todos', todos)
      console.log("Set todos count to", todos)
    } else {
      console.log('Redis is not ready, cannot set todos count')
    }
  } else {
    todos = Number(await redis.get('todos'))
  }
  res.send({
    added_todos: todos
  })
})

module.exports = router;
