var http= require('http');
var s=http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write("hello  test\n");
	res.write('new msg');
    setTimeout(function(){
    res.end("World\n");

    },2000);


    })

s.listen(8000);
