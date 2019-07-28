const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{


console.log(req.method);


}).listen(3333);
