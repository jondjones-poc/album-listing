const fs = require('fs');
const path = require('path');
const { isNullOrUndefined } = require('util');

const headers = {
    'content-type': 'application/json' ,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

exports.handler = async function(event, context, callback) {

    console.log('event', event)
    // "context" has information about the lambda environment and user details
    console.log('context', context)

    
    try {
        const filepath = path.join(__dirname, './data.json');
        console.log('filepath:', filepath); // output to netlify function log
       
        // Use async to ensure non-blocking requests
        const file = await fs.readFile(filepath);

        console.log('file:', file !== null); // output to netlify function log
        const jsonContent = JSON.parse(file);
        console.log('jsonContent:', jsonContent); // output to netlify function log
        return {
            statusCode: 200,
            headers,
            body: jsonContent
        };
    } catch (err) {
        console.log('invocation error:', err.message); // output to netlify function log
        return {
            statusCode: 500,
            body: err.message // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
}