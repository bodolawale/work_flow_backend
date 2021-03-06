const mongoose = require("mongoose");

const { Schema } = mongoose;

const CourseSchema = new Schema({
    code: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    lecturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    units: {
        type: Number,
        required: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
});


// Export the model
module.exports = mongoose.model("Course", CourseSchema);
