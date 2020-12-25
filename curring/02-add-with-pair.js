const add = (x, y) => x + y;

const toPair = f =>
    ([x, y]) => f(x, y);

const fromPair = f =>
    (x, y) => f([x, y]);

const res = fromPair(toPair(add))(1, 2);

console.log(res); // 3