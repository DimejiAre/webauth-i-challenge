const express = require('express');
const router = express.Router();
const db = require('../helpers/dbModel');


router.post('/register', async (req,res) => {
    try {
        const user = req.body;
        const result = await db.registerUser(user)
        res.status(201).json({message: `user ${result} created.`})
    }
    catch (error){
        res.status(500).json({error: `An error occurred during registeration. ${error}`})
    }
})

router.post('/login', async (req,res) => {
    try {
        const user = req.body;
        const result = await db.loginUser(user)
        if(result){
            req.session.user = result
            // res.cookie('foo', 'bar', {maxAge: 1000000, path:'/'})
            res.status(200).json({message: `Successfully logged in`})
        } else {
            res.status(401).json({message: 'Invalid Credentials'})
        }       
    }
    catch (error){
        res.status(500).json({error: `An error occurred during login. ${error}`})
    }
})

router.get('/logout', (req,res) => {
    if(req.session){
        req.session.destroy( err => {
            if(err){
                res.json({error: `could not log you out ${err}`})
            } else {
                res.json({message: `successfully logged out`})
            }
        })
    } else {
        res.end();
    }
})

module.exports = router;