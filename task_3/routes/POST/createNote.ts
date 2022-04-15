import mongoose from "mongoose";

const Router = require('express')
const Note = require("../../mongoose/models");
const router = new Router()

router.post('/notes', async (req, res) => {
    try {
        const {name, creation, category, content} = req.body
        const note = new Note({
            _id: new mongoose.Types.ObjectId(),
            name,
            creation,
            category,
            content,
            isArchives: false
        })
        await note.save()

        return res.json(note)
    } catch (error) {
        console.log(error)
        res.sendStatus(400);
        res.send({message: 'Server errors'})
    }
});

module.exports = router;