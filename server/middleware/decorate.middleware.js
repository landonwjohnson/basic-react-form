const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

function decorate(app) {

    app.use( bodyParser.json() );
    app.use( helmet() );
    app.use( cors() );
    // app.use( express.static('./build' ));

    return app;

}

module.exports = decorate;