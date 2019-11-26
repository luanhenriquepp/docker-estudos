const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.Promise = global.Promise

//DATABASE
mongoose.connect('mongodb://db/mydb')


// MIDDLEWARES
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors())

//ODM

const Client= restful.model('Client', {
    name: { type: String, require: true}
})

//REST API
Client.methods(['get', 'post', 'put', 'delete'])


//ROUTES
Client.register(server, '/clients')

server.listen(3000)