const Right = x =>
({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    toString: `Right(${x})`
});

const Left = x =>
({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    toString: `Left(${x})`
})

// Error Handling
const fromNullable = x =>
    x != null ? Right(x) : Left();

const findColor = name => 
    fromNullable({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name]);

const res = () =>
    findColor('red')
        .map(x => x.toUpperCase())
        .fold(
            () => 'No Color',
            color => color
        )

console.log(res()); 