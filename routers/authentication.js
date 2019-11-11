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

module.exports = router;