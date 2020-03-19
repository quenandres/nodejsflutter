const app = require('./app');
const { connect } = require('./database');

async function main() {
    //Database connection
    await connect();
    //Express Application
    await app.listen(4000);
    console.log("Running on port 4000: Connected");
}

main();