const express = require('express');
const { getDb } = require('../database/bootstrap.database');

const apiRouter = express.Router();

apiRouter.get('/all-applicants', (req, res) => {
    const dbInstance = getDb();
    dbInstance.find_applicants()
        .then( applicants =>  res.send(applicants))
        .catch( err => res.send(err));
});

module.exports = apiRouter;