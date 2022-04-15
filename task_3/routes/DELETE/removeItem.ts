import {MongoClient} from "mongodb";
import config from "config"

const Router = require('express')
const {ObjectId} = require("mongodb")
const router = new Router()
const client = new MongoClient(config.get('dbURL'));
client.connect()

const notesCollections = client.db("radency").collection("notes")

router.delete('/notes/:id', async (req, res) => {
    try {
        const id = req.params.id
        await notesCollections.deleteOne({_id: ObjectId(id)});

        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.send({message: 'Server errors'})
    }
});

module.exports = router;
