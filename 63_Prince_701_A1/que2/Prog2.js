const http = require("http");
const nodeStatic = require("node-static");

const fileServer = new nodeStatic.Server("./");

http.createServer((req, res) => {
    req.addListener("end", () => {
        fileServer.serve(req, res);
    }).resume();
}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});