// ! Basic code
const nextCharForNumberString = str => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = new Number(number + 1);
    return String.fromCharCode(nextNumber);
}


const result = nextCharForNumberString(' 64 ');
console.log(result); // A

// ! modify this code into a (Identity Functor) goto: 02-creating-Identity-functor-v2.js