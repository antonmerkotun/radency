import {MongoClient} from "mongodb";
import config from "config"

const Router = require('express')
const {ObjectId} = require("mongodb")

const router = new Router()
const client = new MongoClient(config.get('dbURL'));
client.connect()
const notesCollections = client.db("radency").collection("notes")


router.patch('/notes/:id', async (req, res) => {
    try {
        const {name, creation, category, content, isArchives} = req.body
        const id = req.params.id
        await notesCollections.replaceOne({_id: ObjectId(id)}, {
            name,
            creation,
            category,
            content,
            isArchives
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.send({message: 'Server errors'})
    }
})

module.exports = router