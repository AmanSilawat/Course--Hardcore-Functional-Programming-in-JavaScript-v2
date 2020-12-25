const add = (x, y) => x + y;

const toPair = f =>
    ([x, y]) => f(x, y);

const res = toPair(add)([1, 2]);

console.log(res); // 3

