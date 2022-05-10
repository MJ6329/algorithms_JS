const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n'); 

const numArr = input[1].split(''); // 더할 숫자만 가져온다

solution(numArr);

function solution(N) {
    let sum = 0;
    N.forEach(el => {
        sum += (+el); //문자열을 숫자로 바꿔주고 더해준다
    })
    console.log(sum);
}
