const express = require('express');
const router= express.Router();
const {projects} = require('../data/data.json'); 


// Home
router.get('/', (req, res) =>{
    res.render('index', {projects});
})

module.exports = router;