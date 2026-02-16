const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const todos = require('./routes/todos');
const statisticsRouter = require('./routes/statistics')

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/statistics', statisticsRouter);
app.use('/todos', todos.router);
app.use('/todos/', todos.singleRouter);
module.exports = app;
