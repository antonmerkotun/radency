"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_2 = require("mongoose");
var noteSchema = new mongoose_2.Schema({
    _id: mongoose_1["default"].Schema.Types.ObjectId,
    name: {
        type: Number,
        required: true
    },
    creation: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isArchives: {
        type: Boolean
    }
});
var Note = mongoose_1["default"].model('Note', noteSchema);
module.exports = Note;
