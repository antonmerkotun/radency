import mongoose from "mongoose";
import {Schema} from "mongoose"

const noteSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: Number,
        required: true,
    },
    creation: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    isArchives: {
        type: Boolean
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;