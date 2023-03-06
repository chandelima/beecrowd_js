var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;

const volume = (radius) => {
    const operation = (4/3) * PI * Math.pow(radius, 3);
    const result = Number.parseFloat(operation).toFixed(3);
    
    return result;
}

console.log("VOLUME =", volume(lines[0]));