const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    chain: f => f(x),
    toString: () => `Box(${x})`
});

const moneyToFloat = str =>
    Box(str)
        .map(s => str.replace(/\$/, ''))
        .fold(s => parseFloat(s));

const percentToFloat = str =>
    Box(str)
        .map(s => str.replace(/\%/, ''))
        .map(s => parseFloat(s))
        .fold(f => f * 0.0100)

const applyDiscount = (price, discount) =>
    Box(moneyToFloat(price))
        .chain(cents =>
            Box(percentToFloat(discount))
                .map(savings => cents - (cents * savings))
        ).fold(x => x)

console.log(String(applyDiscount('$5.00', '20%'))); // 4