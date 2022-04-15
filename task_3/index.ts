import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import config from "config"

const app = express();
const PORT = config.get('serverPORT')
app.use(bodyParser.json());
app.use(express.json());

const createNote = require("./routes/POST/createNote")
const removeNote = require("./routes/DELETE/removeItem")
const editNote = require("./routes/PATCH/editItem")
const retrieveItem = require("./routes/GET/retrieveItem")
const allNote = require("./routes/GET/allNotes")
const dataStatistics = require("./routes/GET/dataStatistics")

app.use(createNote)
app.use(removeNote)
app.use(editNote)
app.use(retrieveItem)
app.use(allNote)
app.use(dataStatistics)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbURL"));

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (err) {
        console.error(err)
    }
}

start();