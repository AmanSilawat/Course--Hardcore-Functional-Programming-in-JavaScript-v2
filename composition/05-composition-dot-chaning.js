// ! Pipeline and dot channing is equivalent

// ! dot channing
const doStuff = str =>
    str
        .toLowerCase()
        .split(' ')
        .map(c => c.trim())
        .reverse()
        .filter(x => x.length > 3)
        .join('');


// ! Pipeline
const doStuff = _.compose(
    join(''),
    _.filter(x => x.length > 3),
    reverse,
    _.map(trim),
    split(' '),
    toLowerCase
);