const fourOhfourErrHandlres = (req, res, next) =>{
    console.dir('This route does not exist')
    const err = new Error();
    err.message = `oops you've hit a . This page does not exist!`
    res.status(404).render('page-not-found', {err});
}

const globalErrHandler = (err,req, res, next) =>{
    console.dir('This route does not exist');
    if(err.status === 404){
        res.status(404).render('page-not-found', {err});
    } else{
        err.message =  `Ooops something has gone wrong! This maybe a server issue. Please be patient, we are working very hard to fix this`;
        res.status(err.status || 500).render('error', {err});
    }
}

module.exports = {fourOhfourErrHandlres, globalErrHandler}