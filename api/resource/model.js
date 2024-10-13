const db = require('../../data/dbConfig')

async function createResource(resource) {
    const [newResource] = await db('resources').insert(resource).returning('*')
    return newResource
}

async function getAllResources() {
    const resourceRows = await db('resources')
    return resourceRows
}

async function getResourceById(resource_id) {
    const resource = await db('resources')
        .where('resource_id', resource_id)
        .first()

    return resource
}

module.exports = { createResource, getAllResources, getResourceById }
