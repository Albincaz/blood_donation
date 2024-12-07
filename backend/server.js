const http = require("http")
const fs = require("fs")
const url = require("url")
const PORT = 3001

const app = http.createServer((req,res)=>{
    const {pathname} = url.parse(req.url);
    console.log(pathname);

if (pathname=="/"){
    res.writeHead(200,{"Content-type" : "text/html"});
    res.end(fs.readFileSync("../frontend/index.html"))
}

else if (pathname=="/css/index.css"){
    res.writeHead(200,{"Content-type" : "text/css"});
    res.end(fs.readFileSync("../frontend/css/index.css"))
}
else if (pathname=="/js/index.js"){
    res.writeHead(200,{"Content-type" : "text/js"});
    res.end(fs.readFileSync("../frontend/js/index.js"))
}

else if (pathname=="/pages/adddonor.html"){
    res.writeHead(200,{"Content-type" : "text/html"});
    res.end(fs.readFileSync("../frontend/pages/adddonor.html"))
}

else if (pathname=="/css/adddonor.css"){
    res.writeHead(200,{"Content-type" : "text/css"});
    res.end(fs.readFileSync("../frontend/css/adddonor.css"))
}

})

app.listen(PORT,()=>{
    console.log("server created");
})