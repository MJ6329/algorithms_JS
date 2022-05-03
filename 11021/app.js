const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i=1; i <= input[0]; i++){
    let num = input[i].split(' ');
    console.log(`Case #${i}:`,  Number(num[0]) + Number(num[1])) 
}