import {MongoClient} from "mongodb";
import config from "config"

const Router = require('express')
const {ObjectId} = require("mongodb")
const router = new Router()
const client = new MongoClient(config.get('dbURL'));
client.connect()
const notesCollections = client.db("radency").collection("notes")


router.get('/notes/:id', async function (req, res) {
    try {
        const id = req.params.id
        const user = await notesCollections.find({_id: ObjectId(id)}).toArray();
        res.send(user);
    } catch (error) {
        console.log(error)
        res.send({message: 'Server errors'})
    }
})

module.exports = router