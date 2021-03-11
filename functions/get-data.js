const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const fs = require('fs').promises;
const port = 5000;
const app = express();
const path = require('path');

app.use(bodyParser);

app.get('/api/songs', (req, res) => {
    try {
        // Use async to ensure non-blocking requests
        const file = fs.readFileSync(require.resolve('./data.json'), 'utf8');
        console.log(file)
        var jsonContent = JSON.parse(file);
        console.log(jsonContent)
        res.setHeader('Content-Type', 'application/json');
        res.send(jsonContent);
    } catch (e) {
        return res.status(500).send(e);
    };
});

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));


 module.exports.handler = serverless(app);