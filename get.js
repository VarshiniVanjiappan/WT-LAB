var http=require('http');
var url=require('url');
var querystring = require('querystring');

function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log('Request for '+path+' received.');
    var query = url.parse(request.url).query;
    console.log('Query');

    var name=querystring.parse(query)["name"];
    var pass=querystring.parse(query)["pass"];
   response.write('Hello '+name+',your password is '+pass+' has been registered successfully.');
   response.end();
}
http.createServer(onRequest).listen(8071);
console.log('Server has started...');
