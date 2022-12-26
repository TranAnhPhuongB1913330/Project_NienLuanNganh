const mongoose = require("mongoose");
const env = require("./envConfig");


mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(env.URL);
        console.log("connect db successfully...");
    } catch (error) {
        console.log(error);
        process.exit;   
    }
}


module.exports = connect;

