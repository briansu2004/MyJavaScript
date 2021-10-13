const myAwesomeArray = [1, 2, 3, 4, 5];

const startForEach = performance.now();
myAwesomeArray.forEach((x) => (x + x) * 10000000000);
const endForEach = performance.now();
console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`);

const startMap = performance.now();
myAwesomeArray.map((x) => (x + x) * 10000000000);
const endMap = performance.now();
console.log(`Speed [map]: ${endMap - startMap} miliseconds`);
