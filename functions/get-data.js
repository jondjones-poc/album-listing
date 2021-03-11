const express = require('express');
const serverless = require('serverless-http');
const app = express();
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser);
app.get('/api/songs', (req, res) => {
    try {
        var filepath = path.join(__dirname, '../public/data.json');

        // Use async to ensure non-blocking requests
        const file = await fs.readFile(filepath, 'utf8');
        var jsonContent = JSON.parse(file);
        
        // Prevent CORS
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        res.setHeader('Content-Type', 'application/json');
        res.send(jsonContent);
    } catch (e) {
        return res.status(500).send(e);
    };
});

module.exports.handler = serverless(app);