const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")
const PORT = 3008


const app = http.createServer((req,res)=>{

    const {pathname} = url.parse(req.url);
    console.log(pathname);

    // if (pathname == "/"){
    //     res.writeHead(200,{"Content-type" : "text/html"});
    //     res.end(fs.readFileSync("../frontend"))
    // }
    // else if (pathname == "/css/index.css"){
    //     res.writeHead(200,{"Content-type" : "text/css"});
    //     res.end(fs.readFileSync("../frontend/css/index.css"))
    // }
    // else if (pathname == "/js/index.js"){
    //     res.writeHead(200,{"Content-type" : "text/js"});
    //     res.end(fs.readFileSync("../frontend/js/index.js"))
    // }
})
app.listen(PORT,()=>{
    console.log("server created");
})