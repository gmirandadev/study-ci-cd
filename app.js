const express = require('express');

// App
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({message: 'server is up'});
});

app.listen(3333);