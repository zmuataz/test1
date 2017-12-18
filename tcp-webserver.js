var net=require('net');
var server= net.createServer(function (socket){
socket.write('hello\n');
socket.write('new line\n');
socket.end('World\n');



})

server.listen(8000);