var http = require('http');
var url = require('url');
//var formidable = require('formidable');


function start(route,handle) {
    http.createServer(requestListener).listen(8888);

    function requestListener(request, response) {
    	var pathname = url.parse(request.url).pathname;
        
        // request.setEncoding('utf8');

        // request.addListener('data',function(postDataChunk){
        //     postData+=postDataChunk;
        //     console.log('Recived POST data chunk "'+postDataChunk+'".');
        // });

        // request.addListener('end',function(){
            route(pathname,handle,response,request);
        // });

        
        
    }

    console.log('Server Started');
}

exports.start=start;