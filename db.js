const mongoose = require('mongoose');

const mogoURL = 'mongodb://localhost:27017/vote'

mongoose.connect(mogoURL);

const db = mongoose.connection;

db.on('connected' ,() => {
    console.log('Connected');
});
db.on('disconnected' ,() => {
    console.log('disconnected');
});

module.exports = db;
    