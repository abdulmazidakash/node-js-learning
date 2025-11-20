// const {add} = require('./add');
// const {subs} = require('./subs');

// module.exports = { add, subs }

import { add } from './add.mjs';
import biyog from './subs.mjs';

// console.log(subs(4, 5));
// console.log(add(4, 5));

export default { add, biyog };