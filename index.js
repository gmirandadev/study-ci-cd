const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();

app.get('/', (req, res) => {
    return res.json({message: 'server is up'});
});

app.listen(PORT);