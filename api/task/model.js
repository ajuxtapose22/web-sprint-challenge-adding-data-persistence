// build your `Task` model here
// build your `Task` model here
const db = require('../../data/dbConfig')

async function createTask(task) {
    const [newTask] = await db('tasks').insert({
        task_description: task.task_description,
        task_notes: task.task_notes,
        task_completed: task.task_completed ? 1 : 0, 
        project_id: task.project_id,
    }).returning('*')

    return {
        task_id: newTask.task_id,
        task_description: newTask.task_description,
        task_notes: newTask.task_notes,
        task_completed: Boolean(newTask.task_completed),
        project_id: newTask.project_id,
    }
}

async function getAllTasks() {
    const taskRows = await db('tasks')
        .join('projects', 'tasks.project_id', 'projects.project_id')
        .select(
            'tasks.task_id',
            'tasks.task_description',
            'tasks.task_notes',
            'tasks.task_completed',
            'projects.project_name',
            'projects.project_description'
        )

    return taskRows.map(task => ({
        task_id: task.task_id,
        task_description: task.task_description,
        task_notes: task.task_notes,
        task_completed: Boolean(task.task_completed), 
        project_name: task.project_name,
        project_description: task.project_description
    }))
}

module.exports = { createTask, getAllTasks }
