function start(){
	console.log("start was called");
	return 'hello start';
}

function upload(){
	console.log("upload was called");
	return 'hello upload';
}

exports.start=start;
exports.upload=upload;