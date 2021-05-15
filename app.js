const express = require('express');

// App
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('*', (req, res) => {
    return res.json({message: 'server is up'});
});

app.listen(port);