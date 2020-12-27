const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    toString: () => `Box(${x})`
});


// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================

// const moneyToFloat = str =>
//     parseFloat(str.replace(/\$/, ''))

const moneyToFloat = str =>
    Box(str)
        .map(s => str.replace(/\$/, ''))
        .fold(s => parseFloat(s));

console.log(String(moneyToFloat('$5.00')));// 5



// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================

// const percentToFloat = str => {
//     const float = parseFloat(str.replace(/\%/, ''))
//     return float * 0.0100
// }

const percentToFloat = str =>
    Box(str)
        .map(s => str.replace(/\%/, ''))
        .map(s => parseFloat(s))
        .fold(f => f * 0.0100)

console.log(String(percentToFloat('20%'))); // 0.2



// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================

// const applyDiscount = (price, discount) => {
//     const cents = moneyToFloat(price)
//     const savings = percentToFloat(discount)
//     return cents - (cents * savings)
// }

const applyDiscount = (price, discount) => 
    Box(moneyToFloat(price))
        .fold(cents =>
            Box(percentToFloat(discount))
                .fold(savings => cents - (cents * savings))
        )

console.log(String(applyDiscount('$5.00', '20%'))); // 4