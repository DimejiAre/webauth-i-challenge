module.exports = {
    restricted
}

async function restricted (req,res,next){
    try{
        if(req.session && req.session.user){
            next()
        } else {
            res.status(401).json({message: 'You do not have permission to access this data'})
        }
    }
    catch(error) {
        res.status(500).json({message: 'Provide valid Credentials'})
    }
    
}