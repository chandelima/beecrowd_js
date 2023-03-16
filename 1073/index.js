var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const value = parseInt(lines[0]);
const pairsValues = [];

for (let i = 2; i <= value; i++) {
    if (i % 2 === 0) pairsValues.push(i);
}

pairsValues.forEach(pv => {
    const square = pv * pv;
    console.log(`${pv}^2 = ${square}`);
});