const express = require('express');
const router= express.Router();
const {projects_data} = require('../data/data.json'); 


// Home
router.get('/', (req, res) =>{
    res.render('index', {projects_data});
})

module.exports = router;