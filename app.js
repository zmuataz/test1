var http= require('http');
var s=http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write("hello  test\n");
	res.write('more line');
    setTimeout(function(){
    res.end("123 World\n");

    },2000);


    })

s.listen(8000);
