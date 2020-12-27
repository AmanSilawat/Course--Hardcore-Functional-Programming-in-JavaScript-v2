// box is a functor beacuse it has a map method
const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    toString: `Box(${x})`
});

const first = xs => xs[0];

// ! Normal way
// const halfTheFirstLargeNumber = xs => {
//     const found = xs.filter(x => x >= 20);
//     const answer = first(found) / 2;
//     return `The answer is ${answer}`;
// }

// ! dot chaining
const halfTheFirstLargeNumber = xs =>
    Box(xs)
        .map(x => xs.filter(x => x >= 20))
        .map(found => first(found) / 2)
        .fold(answer => `The answer is ${answer}`)

// ! same work with composing
compose = (f, g) => x => Box(x).map(g).fold(f);

const result = halfTheFirstLargeNumber([1, 4, 50]);
console.log(result); // A