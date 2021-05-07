const express = require('express');
const router = express.Router();

// About Me

router.get('/', (req, res) =>{
    res.render('about');
});

module.exports = router;