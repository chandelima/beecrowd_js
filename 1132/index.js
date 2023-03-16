var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let v1 = parseInt(lines[0]);
let v2 = parseInt(lines[1]);
let sum = 0;

if (v1 > v2) {
    const temp = v1;
    v1 = v2;
    v2 = temp;
}

for (let i = v1; i <= v2; i++) {
    if(i%13 !== 0) sum += i;
}

console.log(sum);