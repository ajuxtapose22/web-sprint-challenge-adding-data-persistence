const express = require('express')
const app = express()

const resourceRouter = require('./api/resource/router')
const projectRouter = require('./api/project/router')
app.use(express.json())


app.use('/api/resources', resourceRouter)
app.use('/api/projects', projectRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
