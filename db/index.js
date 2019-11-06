/* eslint-disable max-len */
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;


mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", () => {
    console.log("MongoDb connection created successfully!");
}).on("error", () => {
    console.log("MongoDB connection error:");
});
