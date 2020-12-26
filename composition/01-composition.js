// ! Composition without ramda
// compose is a helper function

const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';
const first = xs => xs[0];

const compose = (f, g) => x => f(g(x));
const shout = compose(exclaim, toUpper);

// Both are same
let firstLetter1 = compose(first, compose(exclaim, toUpper));
let firstLetter2 = compose(compose(first, exclaim), toUpper);

console.log(shout('tears')); // TEARS!
console.log(firstLetter1('tears')); // T
console.log(firstLetter2('tears')); // T