require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
var session = require('express-session')

const server = express();
const auth = require('./routers/authentication');
const users = require('./routers/user');

const sessionConfig = {
    name: 'user',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 5,
        secure: false
    }
}

server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig))
server.use('/api/auth', auth);
server.use('/api/users', users);

server.get('/', (req,res) => {
    res.json('welcome to my api')
})

module.exports = server;