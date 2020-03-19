const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost/flutter-node-tutorial',{
        useNewUrlParser: true        
    });
    console.log("database: Connected");
}

module.exports = { connect };