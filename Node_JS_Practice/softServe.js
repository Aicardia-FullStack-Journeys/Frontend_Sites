const http = require("node:http");
const fs = require("node:fs");


//const server = http.createServer((req, res) => {
    /*
    res.writeHead(200, {"Content-Type": "Text/Plain"});
    res.end("Successfully connected to server...👋😊");
    //console.log(req); //too much info
    */

    /*
    //Pass Json type data
    const employee = {
        firstName: "Amarachi",
        lastName: "Yahda",
    };

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(employee));
    */

    //Sending an HTTP Response
    //res.writeHead(200, {"Content-Type": "Text/html"});
    //const html = fs.readFileSync('Node_JS_Practice/serv_index.html', "utf-8");
    //res.end(html);

    //Using a file stream to save memory
    //fs.createReadStream(__dirname +'/serv_index.html').pipe(res);//use __dirname to be safe

//});

const server = http.createServer((req, res) => {
    //See the Url
    //res.end(req.url);

    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Home Page");
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("About Page");
    }
    else if(req.url === "/api"){
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({
            firstName: "Onyeka",
            lastName: "Adalhi",
        }))
    }else{
        res.writeHead(404);
        res.end("Page not found");
    }

    //req.method alows for GET POST DELETE etc

});

server.listen(3000, () => {
    console.log("port 3000: Server running...");
});