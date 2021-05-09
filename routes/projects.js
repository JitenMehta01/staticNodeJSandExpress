const express = require('express');
const router= express.Router();
const {projects_data} = require('../data/data.json'); 

// Projects

router.get('/', (req, res) =>{
    res.redirect('/');
});
router.get('/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects_data.find(({id}) => id === +projectId);
    if(project){
        res.render('project', {project});
    } else{
    const err = new Error();
    err.message = `Ooops. This page does not exist.`;
    err.status = 404;
    next(err);
    }
})



module.exports = router;