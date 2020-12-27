// Definitions
const Right = x =>
({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    toString: () => `Right(${x})`
})

const Left = x =>
({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    toString: () => `Left(${x})`
})

const fromNullable = x =>
    x != null ? Right(x) : Left(null)

const tryCatch = f => {
    try {
        return Right(f())
    } catch (e) {
        return Left(e)
    }
}

const logIt = x => {
    console.log(x)
    return x
}

const DB_REGEX = /postgres:\/\/([^:]+):([^@]+)@.*?\/(.+)$/i

// Exercise: Either
// Goal: Refactor each example using Either
// Bonus: no curlies
// =========================


// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const street = user => {

    fromNullable(user.address) // Right/ Left(address)
        .map(address => address.street)
        .fold(() => 'no Street', x => x)
    const address = user.address

    // if (address) {
    //     return address.street
    // } else {
    //     return 'no street'
    // }
}


const userObj = { address: { street: { name: "Willow" } } }
street(userObj); // { name: "Willow" }



// Ex1a: Refactor streetName to use Either instead of nested if's
// =========================
const streetName_ = user => {
    const address = user.address

    if (address) {
        const street = address.street

        if (street) {
            return street.name
        }
    }

    return 'no street'
}

const streetName = user =>
    fromNullable(user) // Right/ Left(address)
        .chain(user => fromNullable(user.address))
        .chain(address => fromNullable(address.street))
        .map(street => street.name)
        .fold(() => 'no Street', x => x)


const userData = { address: { street: { name: "Willow" } } }
streetName(userData); // "Willow"
streetName({}); // "no street"
streetName({ address: { street: null } }); //  "no street"



// Ex2: Refactor parseDbUrl to return an Either instead of try/catch
// =========================
const parseDbUrl_ = cfg => {
    try {
        const c = JSON.parse(cfg) // throws if it can't parse
        return c.url.match(DB_REGEX)
    } catch (e) {
        return null
    }
}

const parseDbUrl = cfg => 
    tryCatch(() => JSON.parse(cfg))
        .map(c => c.url.match(DB_REGEX))
        .fold(x => null, x => x)


const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'
parseDbUrl(config)[1]; //  "sally"



// Ex3: Using Either and the functions above, refactor startApp
// =========================
const startApp_ = cfg => {
    const parsed = parseDbUrl(cfg)

    if (parsed) {
        const [_, user, password, db] = parsed
        return `starting ${db}, ${user}, ${password}`
    } else {
        return "can't get config"
    }
}

const startApp = cfg =>
    fromNullable(parseDbUrl(cfg))
        .map(([_, user, password, db]) => `starting ${db}, ${user}, ${password}`)
        .fold(() => "can't get config", x => x);

const config2 = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'
console.log( String(startApp(config2))); // "starting mydb, sally, muppets"
console.log( String(startApp())); // "can't get config"