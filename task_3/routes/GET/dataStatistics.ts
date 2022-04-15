import {MongoClient} from "mongodb";
import config from "config"

const Router = require('express')
const router = new Router()
const client = new MongoClient(config.get('dbURL'));
client.connect()
const notesCollections = client.db("radency").collection("notes")


router.get('/notes-stats', async function (req, res) {
    try {
        const task = await notesCollections.find({category: "Task"}).toArray();
        const idea = await notesCollections.find({category: "Idea"}).toArray();
        const randomThought = await notesCollections.find({category: "Random Thought"}).toArray();
        const taskActive = task.filter(el => el.isArchives === false).length
        const taskArchive = task.filter(el => el.isArchives === true).length
        const ideaActive = idea.filter(el => el.isArchives === false).length
        const ideaArchive = idea.filter(el => el.isArchives === true).length
        const randomThoughtActive = randomThought.filter(el => el.isArchives === false).length
        const randomThoughtArchive = randomThought.filter(el => el.isArchives === true).length
        const table = {
            taskActive,
            taskArchive,
            ideaActive,
            ideaArchive,
            randomThoughtActive,
            randomThoughtArchive
        }

        res.send(table);
    } catch (error) {
        console.log(error)
        res.send({message: 'Server errors'})
    }
})

module.exports = router