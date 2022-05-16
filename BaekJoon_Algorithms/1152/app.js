const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

// 처음 제출 한 코드 filter로 돌면서 공백빼고 return.
// 220ms가 걸린다.
function solution(str) {
    const result = (str.join('').split(' ')).filter((el) => {
        return el !== "";
    });
    console.log(result.length);
}

// if문을 사용해서 모든요소를 돌지않고 한번 만 확인해서 거를 수 있게 코드를 다시 짜 보았다.
// 152ms가 걸린다.
function solution(str) {
    const result = str.join('').split(' ');
    if(result[0] === ''){ // 첫 값이 공백이면 배열의 제일 앞 요소 제거
        result.shift();
    }
    if(result[result.length-1] === ''){ // 끝 값이 공백이면 배열의 제일 뒷 요소 제거
        result.pop();
    }
    console.log(result.length);
}

//---------------------------------------------------------------

// 공백을 없애주는 문자열 메소드 trim을 써도 되지 않을까 했는데 틀렸다고 나온다.
// function solution(str) {
//     const newStr = str.join('').trim();
//     const result = newStr.split(' ');
//     console.log(result.length);
// }
