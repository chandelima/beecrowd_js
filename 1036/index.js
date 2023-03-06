var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ");

const a = parseFloat(values[0]);
const b = parseFloat(values[1]);
const c = parseFloat(values[2]);

const delta = b * b - (4 * a * c);

if(delta < 0 || a === 0 || delta === 0) {
    console.log("Impossivel calcular");
    return;
}

const r1 = parseFloat((-b + Math.sqrt(delta)) / (2 * a));
const r2 = parseFloat((-b - Math.sqrt(delta)) / (2 * a));

console.log("R1 =", r1.toFixed(5));
console.log("R2 =", r2.toFixed(5));