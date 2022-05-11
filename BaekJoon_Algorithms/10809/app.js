const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(S) {
    let strArr = [];
    for(let i=97; i<=122; i++){ // a = 92 z = 122
        strArr.push(S.indexOf(String.fromCharCode(i)));
        // String.fromCharCode(i) => (a ~ z) 중에서 input에 해당하는 값의 인덱스 값 반환
        // 배열에 값을 하나씩 넣어주고 합쳐준다.
    }
  
    console.log(strArr.join(' '));
}