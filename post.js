var http=require('http');
var querystring = require('querystring');
var qs,name,email;

http.createServer(function(req,res){
var data1='';
req.on('data',function(chunk){
    console.log("Chunk:"+chunk);
data1 = data1 + chunk;
console.log("Data in String format:"+ data1);
});
req.on('end', function () {
    qs = querystring.parse(data1);    
    console.log(qs["username"]);  
   
    name = qs["name"];    
    pass =qs["pass"];    
    res.write("Hello "+name+", your email id "+pass+" has been registered successfully.");    
    res.end();    
    });
}).listen(9000);
console.log('Server has started...');
