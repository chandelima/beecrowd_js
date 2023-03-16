var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(" ");

let a = parseInt(values[0]);
let b = parseInt(values[1]);

if (a > b) {
    const c = a;
    a = b;
    b = c;
}

if (b % a === 0)
    console.log("Sao Multiplos");
else
    console.log("Nao sao Multiplos");