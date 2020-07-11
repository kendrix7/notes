const router = require('express').Router();
const path = require('path');
const fs = require('fs');
let noteCount = 1;

const readData = () => {
    const noteData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')))
    return noteData;
}

const writeData = (noteData) => {
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteData), (err) => {
        if (err) return ({ err });
    })
}

const newNoteId = () => noteId++;


router.get("/api/notes", (req, res) => {
    console.log("hit api/notes .get");
    let noteData = readData();
    res.json(noteData)
})

router.post('/api/notes', (req, res) => {
    console.log("hit api/notes .post");
    let noteData = readData();
    let newNote = req.body;
    let lastNoteID = !noteData[0] ? 0 : noteData[noteData.length - 1].id;
    let newNoteID = lastNoteID + 1

    newNote.id = newNoteID;
    noteData.push(newNote);
    writeData(noteData);
    return res.json(noteData)
})

router.delete('/api/notes/:id', (req, res) => {
    console.log("hit api/notes .delete");
    let noteData = readData();
    const noteId = req.params.id;
    const newNoteData = noteData.filter((note) => note.id != noteId);

    writeData(newNoteData);
    res.send(newNoteData);
})

module.exports = router;