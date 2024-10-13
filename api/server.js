// build your server here and require it from index.js

const express = require('express')
const app = express()
const resourceRouter = require('./resource/router')

// Middleware to parse JSON bodies
app.use(express.json())

// Use the resource routes
app.use('/api/resources', resourceRouter)

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
