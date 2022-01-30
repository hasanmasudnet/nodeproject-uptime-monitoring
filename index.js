/*
app = {} is just a blank object
app.createServer is just a method variable of the server sunction
app.handleReqRes is just a method variable for server ReqRes handle   
*/

const http = require('http');
const handler = require('./helpers/handleReqRes');


const app = {};
app.config = {
    port:3000
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listining from ${app.config.port}`);
    });

}

app.handleReqRes = handler.handleReqRes;

//start the server
app.createServer();
//process.exit();