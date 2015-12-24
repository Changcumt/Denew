var http = require('http');
var url = require('url');

function start(route,handle) {
    http.createServer(requestListener).listen(8888);

    function requestListener(request, response) {
    	var pathname = url.parse(request.url).pathname;
        // console.log('Request For '+pathname+' receiced.');
        
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write(route(pathname,handle));
        response.end();
    }

    console.log('Server Started');
}

exports.start=start;