require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const server = express();
const auth = require('./routers/authentication');
const users = require('./routers/user');

server.use(helmet());
server.use(express.json());
server.use('/api/auth', auth);
server.use('/api/users', users);

server.get('/', (req,res) => {
    res.json('welcome to my api')
})

module.exports = server;