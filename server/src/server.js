const express = require('express')
const userInfoRouter = require('./routes/userInfoRoutes')
const propertyRouter = require('./routes/propertyRoutes')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.use('/api/user-info', userInfoRouter)

app.use('/api/property-info', propertyRouter)

app.listen(4000, () => {
    console.log('Connected to Port 4000')
})