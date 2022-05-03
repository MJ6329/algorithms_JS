const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    let answer = '';
    for(let i=1; i <= N; i++){
        answer += i + '\n' //바로 출력하면 시간초과 변수에 담아놓고 한번에 출력
    }
    console.log(answer);
}