const rocks = [
    { name: "Bobby Marlin", age: 50 },
    { name: "Bobby Morgan", age: 65 },
    { name: "Bobby Merin", age: 75 },
    { name: "Bobby Martin", age: 85 }
];

const rocksAgedOneYear = rocks.map(rock => {
    rock.age++
    return rock;
});
console.log(rocksAgedOneYear)

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0)
console.log(evenAgedRocks);
