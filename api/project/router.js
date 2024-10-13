
const express = require('express')
const router = express.Router()
const projectModel = require('./model')

// POST /api/projects
router.post('/', async (req, res) => {
    console.log('Incoming request body:', req.body)
    const { project_name, project_description, project_completed } = req.body

 
    if (!project_name || !project_description) {
        return res.status(400).json({
             error: 'project_name and project_description are required' })
    }

    try {
        const project = await projectModel.createProject({
            project_name,
            project_description,
            project_completed
        })
        res.status(201).json(project)
    } catch (error) {
        console.error(error)
        res.status(500).json({
             error: 'Failed to create project' })
    }
})

// GET /api/projects
router.get('/', async (req, res) => {
    try {
        const projects = await projectModel.getAllProjects()
        res.status(200).json(projects)
    } catch (error) {
        console.error(error)
        res.status(500).json({
             error: 'Failed to retrieve projects' })
    }
})

module.exports = router
