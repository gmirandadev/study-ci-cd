const express = require('express');

// App
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('*', (req, res) => {
    return res.send('Testando com pull request - Deploy de uma aplicação usando CI/CD com AWS');
});

app.listen(port);