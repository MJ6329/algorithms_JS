const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')

solution(input);

function solution(str) {
    str.splice(0,1)
    str = [...new Set(str)]
    str.sort((a,b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length);
    console.log(str.join('\n'));
}

