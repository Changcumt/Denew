function route(pathname,handle,response,request){

	console.log('About to route a request for '+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response,request);
	}else{
		console.log('No request handler was found');
		response.writeHead('Content-Type','text/plain');
		response.write('404 not found');
		response.end();
		// return '404 Not Found';
	}
}

exports.route=route;