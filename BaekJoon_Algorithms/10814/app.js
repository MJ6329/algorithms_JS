const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

// 간단하게 풀 수 있었던 문제였는데 꼬아서 생각했다
// 문자열로 된 숫자 ex)'22' 등 도 정렬이 되는 것을 알았다.
function solution(N) {
    N.shift();
    N.sort((a,b) => a.split(' ')[0] - b.split(' ')[0]);
    console.log(N.join('\n'))
}