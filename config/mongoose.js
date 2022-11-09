const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/project_development_db");

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to db'));

db.once('open',function(){
    console.log('Connected to db : Mongo');
});

module.exports = db;