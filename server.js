require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
var session = require('express-session');
const cookieParser = require('cookie-parser')
const KnexSessionStore = require('connect-session-knex')(session);

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
        secure: false,
        httpOnly: false
    },
    store: new KnexSessionStore({
        knex: require('./data/db-Config'),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60
      })
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser())
server.use(session(sessionConfig))
server.use('/api/auth', auth);
server.use('/api/users', users);

server.get('/', (req,res) => {
    res.json('welcome to my api')
})

module.exports = server;