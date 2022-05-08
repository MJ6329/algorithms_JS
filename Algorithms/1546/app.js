const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = +input[0]
const score = input[1].split(' ');

solution(num, score);

function solution(N, S) {
    const max = Math.max(...S);
    const newScroe = S.map(el => el/max*100); // 새로운 배열에 넣어줌
    const sumScore = newScroe.reduce((sum, cuur) => {
        return sum + cuur;
    },0);
    const result = sumScore / N;
    console.log(result);
}
