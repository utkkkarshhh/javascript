const first = [1, 2, 3];
const second = [4, 5, 6];

// [...] => Spread Operator

const combined = [...first, ...second];
console.log(combined);

const slice = combined.slice(2)