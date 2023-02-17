const spaceships = [
    { name: "Bobs tivoli ballon", priceless: true, cost: 1_000_000},
    { name: "floating middlefinger", type:"UFO", priceless: false, cost: Number.MAX_SAFE_INTEGER },
    { name: "nemobird", species: 2, priceless: true, cost: 100}

];

// task loop and console log each element

//spaceships.forEach((spaceship, index, array) => console.log(array));

// task for all spaceship make the owner China
const madeInChina = spaceships.map(spaceship => {
    return {...spaceship, owner: "China"}; // this is for avoiding the mutation of permanently adding "china" to the spaceship objects
});
//console.log(madeInChina)

// task add a cost of "priceless" to all spaceshipsWithOwners

const spaceshipsWithPrice = spaceships.map(spaceship => {
    spaceship.priceless = true;
    return spaceship;
});
//console.log(spaceships)

// task give me the priceless and not priceless spaceships in two lists

const pricelessspaceships = spaceships.filter(spaceship => {
    return spaceship.priceless === true;
});
//console.log(pricelessspaceships)

const nonpricelessspaceships = spaceships.filter(spaceship => {
    return spaceship.priceless === false;
});
//console.log(nonpricelessspaceships)

const ispricelessspaceships = spaceships.filter(spaceship => spaceship.priceless === true)
const isnotpricelessspaceships = spaceships.filter(spaceship => spaceship.priceless === false)
//console.log(isnotpricelessspaceships);
//console.log(ispricelessspaceships);

// task find a spaceship that costs less than 2 million yuan / dollars / whatever spacebucks

const cheaperThan2milspaceship = spaceships.filter(spaceship => spaceship.cost <= 2_000_000);
console.log(cheaperThan2milspaceship);