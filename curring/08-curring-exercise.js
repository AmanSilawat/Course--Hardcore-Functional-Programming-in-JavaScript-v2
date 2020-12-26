// Question link
'https://codepen.io/drboolean/pen/OJJOQMx?editors=1010'

// Solution link
'https://codepen.io/AmanSilawat/pen/gOwXojE'

const _ = require('ramda');

// Exercise 1
const split = _.curry((delimiter, string) => string.split(delimiter))
const words = split(' ');
const strResult = words('Hello my name is Aman Silawat')

strResult; // [ 'Hello', 'my', 'name', 'is', 'Aman', 'Silawat' ]


// Exercise 1a
const sentences = _.map(words);
const strMapREsult = sentences(["Jingle bells Batman smells", "Robin laid an egg"])

strMapREsult; // [['Jingle', 'bells', 'Batman', 'smells'], ['Robin', 'laid', 'an', 'egg']]


// Exercise 2
const filterQs = _.filter(_.test(/q/gi));
const filterResult = filterQs(['quick', 'camels', 'quarry', 'over', 'quails']);

filterResult; //['quick', 'quarry', 'quails']


// Exercise 3
const _keepHighest = (x, y) => x >= y ? x : y // <- leave be
const max = _.reduce(_keepHighest, 0);

const maxResult = max([323, 523, 554, 123, 5234]);
maxResult; // 5234


// Bonus 1:
const slice = _.curry((start, end, xs) => xs.slice(start, end));
const sliceResult = slice(1)(3)(['a', 'b', 'c']);
sliceResult; // ['b', 'c']

// Bonus 2:
const take = slice(0);
const takeResult = take(2)(['a', 'b', 'c']);
takeResult; // ['a', 'b']