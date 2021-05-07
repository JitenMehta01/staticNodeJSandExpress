const express = require('express');
const router= express.Router();
const {projects_data} = require('../data/data.json'); 

// Projects

router.get('/', (req, res) =>{
    res.render('project');
});


module.exports = router;