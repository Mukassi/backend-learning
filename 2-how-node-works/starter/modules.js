// console.log(arguments);
// console.log(require('module').wrapper);

const Calc = require('./test-module-one');

const calculator1 = new Calc();
console.log(calculator1.add(2, 5));

// const calculator2 = require('./test-module-two');
const {add, multiply, divide} = require('./test-module-two');
console.log(multiply(5, 8));


// caching
require('./test-module-tree')();
require('./test-module-tree')();
require('./test-module-tree')();