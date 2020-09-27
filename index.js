
var http = require('http');
var fs = require('fs');

 var server= http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
    var ReadText= fs.createReadStream(__dirname + '/text.html','utf8');
     ReadText.pipe(res);
});

server.listen(4000, '127.168.0.1' );
console.log('Получилось!');
