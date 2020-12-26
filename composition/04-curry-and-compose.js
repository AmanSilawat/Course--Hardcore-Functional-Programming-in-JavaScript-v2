const { curry, compose } = require('ramda')

// ! curry and compose able to make every funciton into a unary function
// a function take one argument instead of a binary

const concat = curry((y, x) => x + y);
const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';
const first = xs => xs[0];

// compose is nested and associative 
let loudFirst = compose(toUpper, first);
let shout = compose(concat('!'), loudFirst);

console.log(shout('tears')); // T!