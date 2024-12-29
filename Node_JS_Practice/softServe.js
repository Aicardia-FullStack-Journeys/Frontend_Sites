const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "Text/Plain"});
    res.end("Successfully connected to server...👋😊");
    //console.log(req);
});

server.listen(3000, () => {
    console.log("port 3000: Server running...");
});