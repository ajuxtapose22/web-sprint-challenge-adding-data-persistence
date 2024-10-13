const express = require('express')
const router = express.Router()
const resourceModel = require('./model')

// POST /api/resources
router.post('/', async (req, res) => {
    try {
        const resource = await resourceModel.createResource(req.body)
        res.status(201).json(resource)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to create resource' })
    }
})

// GET /api/resources
router.get('/', async (req, res) => {
    try {
        const resources = await resourceModel.getAllResources()
        res.status(200).json(resources)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to retrieve resources' })
    }
})

// GET /api/resources/:id
router.get('/:id', async (req, res) => {
    try {
        const resource = await resourceModel.getResourceById(req.params.id)
        if (resource) {
            res.status(200).json(resource)
        } else {
            res.status(404).json({ message: 'Resource not found' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to retrieve resource' })
    }
})

module.exports = router
