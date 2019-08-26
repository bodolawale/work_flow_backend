const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});


// Export the model
module.exports = mongoose.model("User", UserSchema);
