/* eslint-disable max-len */
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;
if (process.env.NODE_ENV !== "development") {
    url = "mongodb://admin:password1@ds141168.mlab.com:41168/school_management";
}

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", () => {
    console.log("MongoDb connection created successfully!");
}).on("error", () => {
    console.log("MongoDB connection error:");
});
