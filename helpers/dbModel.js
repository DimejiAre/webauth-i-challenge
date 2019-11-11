const db = require('../data/db-config');
const bcrypt = require('bcryptjs');

module.exports = {
    registerUser
}

function registerUser(user){
    const hash = bcrypt.hashSync(user.password)
    const newUser = {...user, password: hash}
    return db('users').insert(newUser)
}