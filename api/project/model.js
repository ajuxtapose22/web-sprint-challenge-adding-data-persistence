// build your `Project` model here
const db = require('../../data/dbConfig')

async function createProject(project) {
    const [newProject] = await db('projects').insert(project).returning('*')
    return newProject
}

async function getAllProjects() {
    const projectRows = await db('projects')
    return projectRows
}

async function getProjectById(project_id) {
    const project = await db('projects')
        .where('project_id', project_id)
        .first()

    return project
}

module.exports = { createProject, getAllProjects, getProjectById }
