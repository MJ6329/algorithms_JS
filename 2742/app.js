const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    let answer = '';
    for(let i=N; i >= 1; i--){
        answer += i + '\n'
    }
    console.log(answer);
}