'use strict';

var http = require('http');
var staticServer = require('node-static');
var file = new staticServer.Server('.');

http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(8080);

console.log('Server running on port 8080');