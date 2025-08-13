const Task = require('../models/Task');

// This controller handles task-related operations such as getting, adding, updating, and deleting tasks.
// It assumes that the user is authenticated and their ID is available in req.user.id.
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// This function adds a new task to the database.
// It requires the user to be authenticated, and the task details are provided in the request body
const addTask = async (req, res) => {
    const { title, description, deadline } = req.body;
    try {
        const task = await Task.create({ userId: req.user.id, title, description, deadline });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// This function updates a task based on the provided ID and request body.
// It allows partial updates to the task fields.
const updateTask = async (req, res) => {
    const { title, description, completed, deadline } = req.body;
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        task.title = title || task.title;
        task.description = description || task.description;
        task.completed = completed ?? task.completed;
        task.deadline = deadline || task.deadline;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// This function deletes a task based on the provided ID.
// It checks if the task exists before attempting to delete it.
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        await task.remove();
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getTasks, addTask, updateTask, deleteTask };
