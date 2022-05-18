const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
// 입력에 공백까지 세는거 같아서 공백을 없애줌

solution(input);

function solution(S) {
    //정규표현식 
    const croatia = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g
    const result = String(S).replace(croatia,'-');
    console.log(result.length);
} 