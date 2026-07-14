const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    if (req.url === "/home") {

        const filePath = path.join(__dirname,"index.html");
        fs.readFile(filePath, (err, data) => {

            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } 
    else if (req.url === "/gethello" && req.method === "GET") {

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello NodeJS!!");

    } 
  
});

server.listen(3000, () => {
    console.log("Server running ");
});
