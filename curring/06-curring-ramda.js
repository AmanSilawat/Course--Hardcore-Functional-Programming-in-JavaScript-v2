// const { curry } = R;  // in browser (use cdn library)
const { curry } = require('ramda');  // in nodejs

// Ramda (curry) Function : accept mutiple arguments 
const modulo = curry((x, y) => y % x);
const isOdd = modulo(2);

// defining curried functions is the data it operates on ends up last.
const filter = curry((f, xs) => xs.filter(f));
const getOdds = filter(isOdd);
const result = getOdds([1, 2, 3, 4, 5, 6]);

console.log(result); // [1, 3, 5]