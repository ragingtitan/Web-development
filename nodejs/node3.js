//Serving HTML files using node
const http = require("http")
const fs = require("fs")
const Content = fs.readFileSync("index.html")

//creating server
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text\html'});
    res.end(Content)
})

/*server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80");
})*///Will not cause error when using url
server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening on port 8000");
})//Will cause error when using only url