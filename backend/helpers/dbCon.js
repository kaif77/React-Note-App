const mongoose = require('mongoose');
require("dotenv/config");
// DB Connection
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONN);
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.log(err.message);
    }
}

dbConnection();