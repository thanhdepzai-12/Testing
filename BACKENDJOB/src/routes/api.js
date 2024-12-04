const express = require('express');
const { getTasks, createTask, markTaskCompleted, deleteTask } = require('../controllers/taskController');


const routerAPI = express.Router();



routerAPI.get('/tasks', getTasks);
routerAPI.post('/tasks', createTask);
routerAPI.patch('/tasks/:id', markTaskCompleted);
routerAPI.delete('/tasks/:id', deleteTask);

 
module.exports = routerAPI;