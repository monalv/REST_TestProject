/*
 * Simple Calculation service
 * The request example : http://127.0.0.1:1336/add/4/5
 * Answer 9 
 * */ 


var http=require('http');
var operations={
add:function(a,b){return a+b},
sub:function(a,b){return a-b},
mul:function(a,b){return a*b},
div:function(a,b){return a/b}
}
http.createServer(function handler(req,res){
 var parts=req.url.split('/');
 var op=operations[parts[1]];
 var a=parseInt(parts[2], 10);
 var b=parseInt(parts[3], 10);
 var result= op ? op(a,b) : "error";
 res.writeHead(200,{"Content-Type":"text/plain"});
 res.end("answer " + result);
}).listen(1336,"127.0.0.1");
console.log('Server running at http://127.0.0.1:1336/');

