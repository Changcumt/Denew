var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

function start(response,request){
	console.log("start was called");
	var content ='empty start';
	var body='<html lang=en> <head><meta charset=UTF-8><title>Document</title></head> <body> <form action=/upload method=post> <input type="file" name="upload"> <input type=submit value="Upload File"> </form> </body> </html>';
	response.writeHead('Content-Type','text/plain');
	response.write(body);
	response.end();
	// return content;
}

function upload(response,request){
	console.log("upload was called");
	var form =new formidable.IncomingForm();

	form.parse(request,function(error,fields,files){
		console.log('-------------------------------------');
		console.log(fields);
		console.log('-------------------------------------');
		fs.renameSync(files.upload.path, './tmp/test.png');
	})
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write("recive image");
	response.write("<img src='/show' />");
	response.end();
}

function show(response,request){
	fs.readFile('./tmp/test.png','binary',function(error,file){
		if(error){
			response.writeHead(500,{'Content':'text/plain'});
			response.write(error+'\n');
			response.end();
		}else{
			response.writeHead(200,{'Content':'image/png'});
			response.write(file+'binary');
			response.end();

		}
	})
}

exports.start=start;
exports.upload=upload;
exports.show=show;