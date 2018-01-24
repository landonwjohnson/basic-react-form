const massive = require('massive');
const { dbUsername, dbPassword, dbName } = require('../config/keys.config');
const connectionString = `postgres://fumcupsflatnow:390fa6a4f7d09665a6a77e8151f9057d8fdf35e99b69f4ffca6b8347afcad921@ec2-54-235-65-224.compute-1.amazonaws.com:5432/d6oq4qcbm5l5k7?ssl=true`;
let db;

massive(connectionString)
    .then( dbInstance => db = dbInstance )
    .catch( err => {
        throw new Error(`Massive connection unsuccesful. ${err}`);
    });

function getDb() {

    if (!db) {
        throw console.error('We haven\'t connected to the database yet!');
    }

    return db;
}

module.exports = {
    getDb,
};