const router = require('express').Router();
const path = require('path');
// return notes.html file
    router.get('/notes', (req, res) => {
        console.log("hit /notes htmlRoute");
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
// return index.html file
    router.get('/', (req, res) => {
        console.log("hit / htmlRoute");
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // If no matching route is found default to home
    router.get('*', (req, res) => {
        console.log("hit * htmlRoute");
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    module.exports = router
