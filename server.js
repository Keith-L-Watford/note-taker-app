const express = require('express');
const path = require('path');
const uniqid = require('uniqid');
const fs = require('fs');
const dbjson = require('./db/db.json');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// recommended by Shane C.
app.use(express.static(__dirname + '/public'));

// const notes = [{
//     "title": "test text",
// },];


// 





// The api stuff with some readFile. GET and POST
fs.readFile("db/db.json", "utf8", (err, dbjson) => {
    if (err) throw err;
    const notes = JSON.parse(dbjson)

    app.get('/api/notes', (req, res) => res.json(notes));

    app.post('/api/notes', (req, res) => {
        const aNewNote = req.body;
        notes.push(aNewNote)
        console.log("testing to see if" + aNewNote.title + "was added");
    });

    // ==================================
    // to navigate between pages
    // moving these in here for now because why not
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));



});





// The Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));