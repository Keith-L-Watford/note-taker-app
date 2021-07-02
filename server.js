const express = require('express');
const path = require('path');
const uniqid = require('uniqid');
const fs = require('fs');
const dbjson = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// const notes = [{
//     "title": "test text",
// },];

// The Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// The api stuff. GET and POST
app.get('/api/notes', (req, res) => res.json(dbjson));
app.post('/api/notes', (req,res) => {
    if (dbjson) {
        dbjson.push(req.body)
        res.json(true);
    } else {
        res.json(false);
    }
});



// The Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));