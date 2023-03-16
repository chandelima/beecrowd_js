var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const line = [ ...lines[0] ];

const vowelsStr = "aeiou"
const vowels = [ ...vowelsStr


];

let textVowels = [];
let textVowelsReverse = [];

line.forEach(c => {
    if (vowels.includes(c)) {
        textVowels.push(c);
        textVowelsReverse.unshift(c);
    }
});

let text = "";
textVowels.forEach(c => text += c);
textVowels = text;

text = ""
textVowelsReverse.forEach(c => text += c);
textVowelsReverse = text;

if (textVowels === textVowelsReverse)
    console.log("S")
else
    console.log("N");