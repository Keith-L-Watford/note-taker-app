const express = require('express');
const path = require('path');
const uniqid = require('uniqid');
const fs = require('fs');
// const dbjson = require('./db/db.json');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// recommended by Shane C.
// app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));


// =====================================================================

// The api stuff with readFile. GET and POST
// fs.readFile("db/db.json", "utf8", (err, data) => {});
// if (err) throw err;

// Get/read the database
app.get('/api/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json","utf8"))
    res.json(notes)
});


app.post('/api/notes', (req, res) => {
    const aNewNote = req.body;
    aNewNote.id = uniqid();

    let notes = JSON.parse(fs.readFileSync("./db/db.json","utf8"))

    notes.push(aNewNote)
 
    console.log("testing to see if " + aNewNote.title + " was added");
});

// ============
// // stuff about unique ID numbers
// app.get('/api/notes/:id', (req, res) => {

//     res.json(notes);
// });

app.delete("/api/notes/:id", function (req, res) {
    let noteId = req.params.id.toString();

    let notes = JSON.parse(fs.readFileSync("./db/db.json","utf8"))
    // notes.splice(noteId, 1);
   

    console.log("testing to see if " + noteId + " was deleted.");
});

// ==================================
// to navigate between pages
// moving these in here for now because why not
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// addNewNoteToDB()
function addNewNoteToDB() {
    fs.writeFile("db/db.json", JSON.stringify(notes), err => {
        if (err) throw err;
        return true;
    });
}




// The Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));