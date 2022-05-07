const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(num) {
    const line = +num[0]; //for문을 얼마나 돌 지
    for(let i=1; i<=line; i++){
        let score = 0;
        let sum = 0;
        num[i].split('').forEach(el=>{
            if(el === 'O'){
                score++;
                sum += score;
            }
            else {
                score = 0; //x가 나오면 누적 점수를 다시 초기화시켜줌
            }
        })
        console.log(sum);
    }
}