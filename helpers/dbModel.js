const db = require('../data/db-config');
const bcrypt = require('bcryptjs');

module.exports = {
    registerUser,
    loginUser
}

function registerUser(user){
    const hash = bcrypt.hashSync(user.password)
    const newUser = {...user, password: hash}
    return db('users').insert(newUser)
}

async function loginUser(user){
    let result = await db('users').where({username: user.username}).first()
    if (user && bcrypt.compareSync(user.password, result.password)){
        return result
    } else {
        return null
    }   
}