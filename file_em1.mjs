// const {a} = require('../module-9/M09V08_file2');
// const {a: x} = require('../module-9/M09V08_file3');

// const {add, subs} = require('./utils_esm')



// // console.log(a, x);

// console.log(add(2, 3));
// console.log(subs(2, 3));
// console.log(subs(x, a));

import { a } from './file_em2.mjs'
import { a as x } from './file_em3.mjs';

import utils from './utils_esm/index.mjs';

// console.log(a, x);
console.log(utils.add(2, 3));
console.log(utils.biyog(x, a));
console.log(a, x);

// version nn.mm.uu ===> major, minor, update