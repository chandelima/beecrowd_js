var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const values = lines.map(l => parseInt(l));

let bigger = 0;
let index;

values.forEach((v, i) => {
    if (v > bigger) {
        bigger = v;
        index = i + 1;
    }
});

console.log(bigger);
console.log(index);