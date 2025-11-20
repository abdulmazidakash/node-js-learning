//normal receive data ============
// const x = require('../module-9/M09V08_file2');

// object receive destructure===============
// const {a} = require('../module-9/M09V08_file2');

// name alias means new name object ============
const {a} = require('../module-9/M09V08_file2');
const {a: x} = require('../module-9/M09V08_file3');

// const { add } = require('./utils/add')
// const { subs } = require('./utils/subs')

const {add, subs} = require('./utils')



// console.log(a, x);

console.log(add(2, 3));
console.log(subs(2, 3));
console.log(subs(x, a));