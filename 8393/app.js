const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(+input[0]); //그냥 input을 입력 했을 때 보다 4ms 빨랐다.

function solution(n) {
    let sum = 0;
    for(let i=1; i <= n; i++){
        sum += i;
    }
    console.log(sum);
    
}

