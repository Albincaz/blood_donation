const http=require("http")
const fs=require("fs")
const url=require("url")
const queryString=require("querystring")
const PORT=3001
const {MongoClient,ObjectId}=require("mongodb")
const { error } = require("console")
const client=new MongoClient("mongodb://127.0.0.1:27017/")

const app=http.createServer(async (req,res)=>{
    const db=client.db("newdb")
    const collection=db.collection("donors")
    const {pathname}=url.parse(req.url)
    console.log(pathname);
    if(pathname=="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../Front-end/index.html"))
    }
    else if(pathname=="/css/index.css"){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../Front-end/css/index.css"))
    }
    else if(pathname=="/js/index.js"){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../Front-end/js/index.js"))
    }
    else if(pathname=="/pages/addDonor.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../Front-end/pages/addDonor.html"))
    }
    else if(pathname=="/index.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../Front-end/index.html"))
    }

    else if(pathname=="/images/bgmain.jpg"){
        res.writeHead(200,{"Content-Type":"text/jpg"})
        res.end(fs.readFileSync("../Front-end/images/bgmain.jpg"))
    }

    else if(pathname=="/images/indeximg.jpg"){
        res.writeHead(200,{"Content-Type":"text/jpg"})
        res.end(fs.readFileSync("../Front-end/images/indeximg.jpg"))
    }

    if(pathname=="/submit"&&req.method=="POST"){
        let body=""
        req.on("data",(chunks)=>{
            body+=chunks.toString()
            console.log(body);
        })
        req.on("end",async()=>{
            const formdata=queryString.parse(body)
            console.log(formdata);
            collection.insertOne(formdata).then(()=>{
                console.log("sucessfully inserted");
            }).catch((error)=>{
                console.log(error);
            })
        })
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../Front-end/index.html"))
    }

    if(pathname=="/getdonors"&&req.method=="GET"){
        const data= await collection.find().toArray()
        console.log(data);
        const jsondata=JSON.stringify(data)
        res.writeHead(200,{"Content-Type":"text/json"})
        res.end(jsondata)
    }

    if(pathname=="/delete"&& req.method=="DELETE"){
        let body=""
        req.on("data",(chunks)=>{
            body+=chunks.toString()
            console.log(body);
        })
        req.on("end",async()=>{
            let _id=new ObjectId(body)
            console.log(_id);
            await collection.deleteOne({_id}).then(()=>{alhost:3001
                res.writeHead(200,{"Content-Type":"text/json"})
                res.end("Successfully Deleted")
            }).catch((error)=>{
                res.writeHead(400,{"Content-Type":"text/json"});
                res.end("failed \nError : "+error)
            })
            
        })
        
    }


    if (pathname=="/update" && req.method=="PUT"){
        let body=""
        req.on("data",(chunks)=>{
            body+=chunks.toString()
            console.log(body);
        })
    }

})


client.connect().then((msg)=>{
    console.log("database connected");
    
    app.listen(PORT,()=>{
        console.log("server created");
    })
}).catch((error)=>{
    console.log(error);
})
    