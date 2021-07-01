const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


const notes = [{},];


app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));


// the api stuff. GET and POST
app.get('/api/notes/:notes', (req,res) => {

});

app.post('/api/notes/', (req, res) => {

});


// The Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));