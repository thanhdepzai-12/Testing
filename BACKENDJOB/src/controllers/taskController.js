
const taskService = require('../services/taskService');

const getTasks = async (req, res) => {
  try {
    const { status } = req.query; 
    let query = {};
    if (status === 'completed') {
      query.isCompleted = true;
    } else if (status === 'incomplete') {
      query.isCompleted = false;
    }else if (status==='All'){
      let query = {};
    }

    const tasks = await taskService.getTasks(query);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body; 
    const task = await taskService.createTask( title, description, dueDate );
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const markTaskCompleted = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, { isCompleted: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTasks, createTask, markTaskCompleted, deleteTask };
