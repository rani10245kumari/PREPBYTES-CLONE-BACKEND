const cloudUrl =
    "mongodb+srv://ranik10245:ranik10245@cluster0.amponrd.mongodb.net/PREPBYTES-CLONE?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect(cloudUrl);

        console.log("Connected to the database");
    } catch (err) {
        console.error("Error in connect DataBase", err);
    }
};

module.exports = connection;