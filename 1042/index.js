var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ");
const sortAscending = [ ...values ].sort((a, b) => a - b);

sortAscending.forEach(c => console.log(c));
console.log()
values.forEach(c => console.log(c));