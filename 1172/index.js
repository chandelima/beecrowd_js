var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let turns = parseInt(lines[0]);

for (let i = 1; i <= turns; i++) {
    const line = lines[i];
    let words = line.split(" ");
    words = words.filter(x => x);

    let text = "";
    words.forEach(w => {
        text += w[0];
    })

    console.log(text);
}