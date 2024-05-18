require('dotenv').config(); 
const express = require('express')
const userInfoRouter = require('./routes/userInfoRoutes')
const propertyRouter = require('./routes/propertyRoutes')

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.use('/api/user-info', userInfoRouter)

app.use('/api/property-info', propertyRouter)

app.listen(PORT, () => {
    console.log('Connected to Port 4000')
})