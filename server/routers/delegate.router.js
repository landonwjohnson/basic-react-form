const apiRouter = require('./api.router');

function delegate(app) {
    
    app.use('/api', apiRouter);

}

module.exports = delegate;