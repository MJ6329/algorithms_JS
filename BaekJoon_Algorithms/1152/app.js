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
//---------------------------------------------------------------

// 공백을 없애주는 문자열 메소드 trim을 써도 되지 않을까 했는데 틀렸다고 나온다.
// function solution(str) {
//     const newStr = str.join('').trim();
//     const result = newStr.split(' ');
//     console.log(result.length);
// }
