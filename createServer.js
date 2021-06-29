var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'texthtml'});
  res.write('Hello World!');
 res.write(req.url)
  res.end();
}).listen(4000);


