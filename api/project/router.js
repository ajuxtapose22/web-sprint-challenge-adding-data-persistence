// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const projectModel = require('./model')

// POST /api/project
router.post('/', async (req, res) => {
    try {
        const resource = await projectModel.createProject(req.body)
        res.status(201).json(resource)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to create projects' })
    }
})

// GET /api/projects
router.get('/', async (req, res) => {
    try {
        const project = await projectModel.getAllProjects()
        res.status(200).json(project)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to retrieve projects' })
    }
})

module.exports = router