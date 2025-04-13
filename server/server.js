const http = require('http');
 const PORT = 3000;

 const server = http.createServer((req,res)=>{
     res.writeHead(200,{'content-type' :'text/html'});
     res.end("<h1>hello ethiopia</h1>");
 })


 server.listen(PORT,()=>{
    console.log("the server is running");
 });