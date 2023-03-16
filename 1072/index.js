var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines = lines.map(n => parseInt(n))

const amount = lines[0];
let values = []
let nIn = 0;
let nOut = 0;

for (let i = 1; i <= amount; i++) {
    values.push(lines[i]);
}

values.forEach(v => {
    if (v >= 10 && v <= 20) nIn++;
    else nOut++;
})

console.log(`${nIn} in`);
console.log(`${nOut} out`);
