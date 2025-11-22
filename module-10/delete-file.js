const fs = require("fs");

fs.writeFileSync('./output/temp.txt', 'this is a temp file');
console.log('temp file created');

if(fs.existsSync('./output/temp.txt')){
	console.log('file exists');

	fs.unlinkSync('./output/temp.txt');
	console.log('file deleted');
};

try{
	fs.unlinkSync('./output/temp.txt');
	console.log('try catch file deleted successfully');
}catch(error){
	console.log('ERROR: ==>', error.message);
};

// synchronous way ==============
fs.writeFile('./output/temp2.txt', 'Another temp file', (err)=>{
	if(err) return console.error('Error: ===>', err.message);

	
	fs.unlink('./output/temp2.txt', (err)=>{
		if(err){
			console.error('Error: ==>', err.message);
		}else{
			console.log('temp 2 deleted');
		}
	})
})