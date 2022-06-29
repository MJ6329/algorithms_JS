const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(S) {
    let i = 1;
    let sum = 0;
    while(sum <= S){
        let total = sum += i;
        total > S ? i-- : i++;
    }
    console.log(i);
}
