const { StringDecoder } = require('string_decoder');
const url = require('url');
const routes = require('../routes');
const {notFountHandler} = require('../handlers/routeHandlers/notFoundHandler');

const handler = {};

handler.handleReqRes = (req, res) => {
    
    
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname; 
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedURL.query;
    const headersObject = req.headers;
    
    const decoder = new StringDecoder('utf-8');
    let realData = '';


    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath]:notFountHandler;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);

    });


/*
    console.log(parsedURL);
    console.log(path);
    console.log(trimmedPath);
    console.log(method);
    console.log(queryStringObject);
    console.log(headersObject);
    
*/
    res.end('Hello World! Hi');
};



module.exports = handler;
 