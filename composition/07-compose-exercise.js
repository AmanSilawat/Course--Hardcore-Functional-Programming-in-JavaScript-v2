const _ = require('ramda');
var { formatMoney } = require("accounting");

// Example Data
const CARS = [
    { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
    { name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false },
    { name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false },
    { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
    { name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true },
    { name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false }
];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

// Answer :
const isLastInStock = _.compose(_.prop('in_stock'), _.last);

// const isLastInStock = cars => {
//   var reversed_cars = _.last(cars)
//   return _.prop('in_stock', reversed_cars)
// }

isLastInStock(CARS);// false



// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

const nameOfFirstCar = _.compose(_.prop('name'), _.head);

var res = nameOfFirstCar(CARS); // "Ferrari FF";



// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition

// const availablePrices = function(cars) {
//   const available_cars = _.filter(_.prop('in_stock'), cars);
//   return available_cars.map(x => formatMoney(x.dollar_value)).join(', ');
// }

const _average = function (xs) { return _.reduce(_.add, 0, xs) / xs.length; }; // <- leave be

const averageDollarValue = _. compose(_average, _.map(_.prop('dollar_value')));

averageDollarValue(CARS); //790700



// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

const _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

const sanitizeNames = _.map(_.compose(_.toLower, _underscore, _.prop('name')));


var res = sanitizeNames(CARS); 
// ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra']




// Bonus 1:
// ============
// Refactor availablePrices with compose.


// const availablePrices2 = function (cars) {
//     const available_cars = _.filter(_.prop('in_stock'), cars);
//     console.log(available_cars)
//     return available_cars.map(x => formatMoney(x.dollar_value)).join(', ');
// }

const formatDollarValue = _.compose(formatMoney, _.prop('dollar_value'));

const availablePricesArray = _.compose(
    _.map(formatDollarValue),
    _.filter(_.prop('in_stock'))
)

const availablePrices2 = _.compose(_.join(', '), availablePricesArray)


availablePrices2(CARS);// $700,000.00, $1,850,000.00'




// Bonus 2:
// ============
// Refactor to pointfree.

// const fastestCar = function(cars) {
//   const sorted = _.sortBy(car => car.horsepower, cars);
//   const fastest = _.last(sorted);
//   return fastest.name + ' is the fastest';
// }

const append = _.flip(_.concat);

const fastestCar = _.compose(
    append(' is the fastest'),
    _.prop('name'),
    _.last,
    _.sortBy(_.prop('horsepower'))
)

fastestCar(CARS); // 'Aston Martin One-77 is the fastest'