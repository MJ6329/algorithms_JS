const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n'); 

const num = parseInt(input[0].split(' ')[1]);
const score = input[1].split(' ').map(item => +item);

 solution(num, score);

function solution(N, S) {
    S.sort((a,b) => b - a);
    console.log(S[N - 1]);
};
