// ! for node js
// const { Task } = require('./types');
// const { compose } = require('ramda');

// ! for browser
const { compose } = R;

// =========================================

// ! Synchronous code
const Box = f =>
({
    map: g => Box(compose(f, g)),
    fold: f
})

let res1 = Box(() => 2)
    .map(two => two + 1)
    .fold();

res1; // 2

// ========================================

// ! just like a promise
let t1 = Task((rej, res) => res(2))
.map(two => two + 1)
.map(three => three * 2)


// fork working like fold
t1.fork(console.error, console.log); // 6

// ========================================


// ! Nested task With chain
let t2 = Task((rej, res) => res(2))
    .chain(two => Task.of(two + 1))
    .map(three => three * 3)


// fork working like fold
t2.fork(console.error, console.log); //9