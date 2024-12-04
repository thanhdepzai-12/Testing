require("dotenv").config();
const Task = require('../models/taskModel');
const getTasks = async (query) => {
  try {
    const tasks = await Task.find(query);  
    return tasks;
  } catch (error) {
    throw new Error(error.message);
  }
};
const createTask = async (title, description, dueDate) => {
  try {
    const task = await Task.create({ title, description, dueDate });
    return {
      results: task, 
      EC: 0,  
      EM: 'CREATE TASK SUCCESS',  
    };
  } catch (error) {

    return {
      EC: 1,  
      EM: `CREATE TASK FAILED: ${error.message}`, 
    };
  }
};
const updateTask = async (id, updates) => await Task.findByIdAndUpdate(id, updates, { new: true });
const deleteTask = async (id) => await Task.findByIdAndDelete(id);

module.exports = { getTasks, createTask, updateTask, deleteTask };


