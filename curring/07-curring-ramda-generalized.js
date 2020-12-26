const { curry } = require('ramda');

// Ramda (curry) Function : accept mutiple arguments 
const modulo = curry((x, y) => y % x);

// defining curried functions is the data it operates on ends up last.
const filter = curry((f, xs) => xs.filter(f));

const replace = curry((regex, replacment, str) =>
    str.replace(regex, replacment)
);

const replaceVowels = replace(/[AEIOU]/gi, '!');
const result = replaceVowels('Hey I have words')

console.log(result); // H!y ! h!v! w!rds