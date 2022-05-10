const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString(); 
solution(input[0]);

function solution(N) {
    console.log(N.charCodeAt());
}
// 문자열 => 아스키 : charCodeAt(문자열자릿수)
// 아스키 => 문자열 : fromCharCode(코드번호)
