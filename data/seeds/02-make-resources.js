const projects = [
  { project_name: 'Website', project_description: 'Build portfolio', project_completed: 0 },
  { project_name: 'Mobile-App', project_description: 'Create to-do app', project_completed: 0 }
]

const resources = [
  { resource_name: 'React', resource_description: 'JS UI library' },
  { resource_name: 'Node', resource_description: 'Backend Tool' },
  { resource_name: 'Illustrator', resource_description: 'Design tool' }
]

const tasks = [
  { task_description: 'Setup project', task_notes: 'Create structure', task_completed: 0, project_id: 1 },
  { task_description: 'Design UI', task_notes: 'Mockups in Illustrator', task_completed: 0, project_id: 1 },
  { task_description: 'Build frontend', task_notes: 'Use React', task_completed: 0, project_id: 1 },
  { task_description: 'Task feature', task_notes: 'Add tasks', task_completed: 0, project_id: 2 }
]

const project_resources = [
  { project_id: 1, resource_id: 1 },
  { project_id: 1, resource_id: 3 },
  { project_id: 2, resource_id: 1 },
  { project_id: 2, resource_id: 2 }
]

exports.seed = async function (knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('project_resources').insert(project_resources)
}
