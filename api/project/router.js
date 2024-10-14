
const express = require('express')
const router = express.Router()
const projectModel = require('./model')

// POST /api/projects
router.post('/', async (req, res) => {
    console.log('request body:', req.body)
    const { project_name, project_description, project_completed } = req.body

 
    if (!project_name) {
        return res.status(400).json({
             error: 'project_name is required' })
    }

    try {
        const project = await projectModel.createProject({
            project_name,
            project_description: project_description || null,
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


// DELTE /api/projects/id
router.delete('/:id', async (req, res) => {
    const { id} =req.params

    if(!id) {
        return res.status(400).json({
            error: "Project ID is required"
        })
    }

    try {
        const deleted = await projectModel.deleteProject(id)

        if (deleted) {
            res.status(200).json({ message: `Project with ID ${id} deleted` })
        } else {
            res.status(404).json({ error: `Project with ID ${id} not found`})
        }
    } catch (error) {
        console.log(error('Error deleting project:', error))
        res.status(500).json({ error: 'Failed to delete project'})
    }
})

module.exports = router
