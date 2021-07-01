const express = require('express');
const path = require('path');
const uniqid = require('uniqid');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// const notes = [{
//     "title": "test text",
// },];


// routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));


// the api stuff. GET and POST
app.get('/api/notes/', (req,res) => {
    
});

app.post('/api/notes/', (req, res) => {
// const newNote = req.body;

});


// The Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));