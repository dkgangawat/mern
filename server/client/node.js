const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==="/about"){
         res.end("<h1>my name is deepak bairwa</h1><p>deepak bairrwa</p>")
    
    }
   
})

server.listen(8000, "127.0.0.1",()=>{
    console.log("server is runing");
});