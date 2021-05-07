const fourOhfourErrHandlres = (req, res, next) =>{
    const err = new Error();
    err.message = `oops you've hit a . This page does not exist!`
    res.status(404).render('not-found', {err});
}

const globalErrHandler = (err,req, res, next) =>{
    if(err.satus === 404){
        res.status(404).render('not-found', {err});
    } else{
        err.message = err.message || `Ooops something has gone wrong!`;
        res.status(err.status || 500).render('not found', {err})
    }
}

module.exports = {fourOhfourErrHandlres, globalErrHandler}