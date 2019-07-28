const http=require('http');

const server=http.createServer((req,res)=>
{
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('<h1>hi guys this si ur daada</h1>');

});
server.listen(9111);
console.log('yeh baby');