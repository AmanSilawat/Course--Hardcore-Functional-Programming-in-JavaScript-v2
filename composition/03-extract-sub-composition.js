const { compose } = require('ramda')

// extract sub composition
// compose is a helper function
// ! composing work right to left 

const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';
const first = xs => xs[0];

// compose is nested and associative 
let loudFirst = compose(toUpper, first);
let shout = compose(exclaim, loudFirst);

console.log(shout('tears')); // T!