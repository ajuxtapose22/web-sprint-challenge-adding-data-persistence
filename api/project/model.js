
const db = require('../../data/dbConfig')

async function createProject(project) {
    const newProjectId = await db('projects').insert({
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: project.project_completed ? 1 : 0,
    })
   
    const newProject = await db('projects').where('project_id', newProjectId[0]).first()


    return {
        project_id: newProject.project_id,
        project_name: newProject.project_name,
        project_description: newProject.project_description,
        project_completed: Boolean(newProject.project_completed),
    }
}

async function getAllProjects() {
    const projectRows = await db('projects as p').select(
        'p.project_id',
        'p.project_name',
        'p.project_description',
        'p.project_completed'
    )

    const projects = projectRows.map(row => ({
        project_id: row.project_id,
        project_name: row.project_name,
        project_description: row.project_description,
        project_completed: Boolean(row.project_completed),
    }))

    return projects
}

module.exports = { createProject, getAllProjects }
