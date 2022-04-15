import {MongoClient} from "mongodb";
import config from "config"

const Router = require('express')
const router = new Router()
const client = new MongoClient(config.get('dbURL'));
client.connect()
const notesCollections = client.db("radency").collection("notes")

router.get('/notes', async function (req, res) {
    try {
        const allNotes = await notesCollections.find({}).toArray();
        res.send(allNotes);
    } catch (error) {
        console.log(error)
        res.send({message: 'Server errors'})
    }
})

module.exports = router