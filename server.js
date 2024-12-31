const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");


//web server
const server = http.createServer((req, res) => {
    //BROWSER
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
});

server.listen(PORT, () => {
    console.log("server running!");
});
