// build your `/api/tasks` router here

const express = require('express')
const router = express.Router()
const taskModel = require('./model')

// POST /api/tasks
router.post('/', async (req, res) => {
    try {
        const task = await taskModel.createTask(req.body)
        res.status(201).json(task)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to create task' })
    }
})

// GET /api/tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await taskModel.getAllTasks()
        res.status(200).json(tasks)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to retrieve tasks' })
    }
})

module.exports = router
