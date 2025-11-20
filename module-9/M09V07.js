// IIFE ==> Immediately Invoked Function Expression

((name)=>{
	console.log(`i will put in hard work and level up with ${name}`);
})('Next Level');

(function (exports, require, module, __fileName, __dirName) =>{
	// we write our code
	console.log('we write our code');
})(exports, require, module, __fileName, __dirName);