const fs = require('fs');

fs.readFile('./data/diary.txt', 'utf-8', (error, data)=>{
	if(error){
		console.error('Error happened: ==>', error.message);
	};

	console.log('file content');
	console.log(data);
});

console.log('this file runs immediately - no blocking');