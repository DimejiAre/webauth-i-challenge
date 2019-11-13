const express = require('express');
const router = express.Router();
const db = require('../helpers/dbModel');

const { restricted } = require('../helpers/middleware');

router.get('/', [restricted], async (req,res) => {
    try{
        const result = await db.getUsers()
        res.status(200).json(result)
    }
    catch (error){
        res.status(500).json({error: `An error occurred retrieving users. ${error}`})
    }
})

module.exports = router;