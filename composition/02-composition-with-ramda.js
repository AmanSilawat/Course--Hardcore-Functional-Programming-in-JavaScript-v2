const { compose } = require('ramda')

// compose is a helper function
// ! composing work right to left 

const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';
const first = xs => xs[0];

// const compose = (f, g) => x => f(g(x));
const shout = compose(exclaim, toUpper);

// compose is nested and associative 
let firstLetter1 = compose(first, exclaim, toUpper);
let firstLetter2 = compose(exclaim, toUpper, first);

console.log(shout('tears')); // TEARS!
console.log(firstLetter1('tears')); // T
console.log(firstLetter2('tears')); // T!