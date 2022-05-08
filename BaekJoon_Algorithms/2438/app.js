const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(+input[0]);

function solution(N) {
    let answer = '';
    for(let i=0; i < N; i++){
       answer += '*';
       console.log(answer)
    }    
}