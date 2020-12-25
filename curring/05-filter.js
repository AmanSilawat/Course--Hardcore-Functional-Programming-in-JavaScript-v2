const curry = f =>
    x => y => f(x, y);

const modulo = curry((x, y) => y % x);
const isOdd = modulo(2);

// defining curried functions is the data it operates on ends up last.
const filter = curry((f, xs) => xs.filter(f));
const getOdds = filter(isOdd);
const result = getOdds([1, 2, 3, 4, 5, 6]);

console.log(result);