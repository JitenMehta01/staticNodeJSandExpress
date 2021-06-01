const express = require('express');
const app = express();
const index = require('./routes');
const aboutMe = require('./routes/about');
const projects = require('./routes/projects');
const errHandlers = require('./errhandlers/errHandlers')


// sets pug as view engine
app.set('view engine', 'pug');

// all static files will be served at /static
app.use('/static', express.static('public'));

// router files
app.use('/about', aboutMe);
app.use('/projects', projects);
app.use(index);

// err handlers
app.use(errHandlers.fourOhfourErrHandlres);
app.use(errHandlers.globalErrHandler);

// local hosting will be held at port 3000
app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});
