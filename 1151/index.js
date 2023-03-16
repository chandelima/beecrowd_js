var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let turns = parseInt(lines[0]);
const elements = [0, 1];

if (turns > 46) turns = 46;
if (turns < 0) turns = 0;


for (let i = 2; i < turns; i++) {
    const result = elements[i-1] + elements[i-2];
    elements.push(result);
}

let output = "";

elements.forEach(v => {
    output += `${v} `
})

output = output.trim();

console.log(output);