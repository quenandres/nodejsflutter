const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost/flutter-node-tutorial',{
        useNewUrlParser: true,
        useUnifiedTopology: true    
    });
    console.log("database: Connected");
}

module.exports = { connect };