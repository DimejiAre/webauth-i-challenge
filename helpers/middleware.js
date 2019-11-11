const db = require('./dbModel');

module.exports = {
    restricted
}

async function restricted (req,res,next){
    try{
        const {username, password} = req.headers
        const payload = {username, password }

        const result = await db.loginUser(payload)
        if(result){
            next()
        } else {
            res.status(401).json({message: 'Invalid Credentials'})
        }
    }
    catch(error) {
        res.status(500).json({message: 'Provide valid Credentials'})
    }
    
}