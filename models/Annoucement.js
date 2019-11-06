const mongoose = require("mongoose");

const { Schema } = mongoose;

const AnnoucementSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    isGeneral: {
        type: Boolean,
        default: true,
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
    },
});


// Export the model
module.exports = mongoose.model("Annoucement", AnnoucementSchema);
