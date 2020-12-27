// box is a functor beacuse it has a map method
const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: `Box(${x})`
});

const nextCharForNumberString = str =>
    Box(str)
        .map(x => x.trim())
        .map(trimmed => parseInt(trimmed, 10))
        .map(number => new Number(number + 1))
        .fold(String.fromCharCode)

const result = nextCharForNumberString(' 64 ');
console.log(result); // A