var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const soma = (x, y) => {
    if(!x || !y)
        return;
        
    const result = Number(x) + Number(y);
    
    return console.log(`SOMA = ${result}`);
}

soma(lines[0], lines[1]);