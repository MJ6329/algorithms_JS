let fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item) => +item);
//입력에 오류가 있었다. 배열에 있는 값을 숫자로 변환하지 않았었음
solution(input);

function solution(numbers) {
    let max = numbers[0];
    for(let i=0; i<numbers.length; i++){
        if(max < numbers[i]){
            max = numbers[i];
        }
    }
    console.log(max);
    console.log(numbers.indexOf(max) + 1); // 요소의 인덱스값을 반환 0부터 세기때문에 1을 더해줌
}

//-------------------------------------------------------------------------------

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// solution(input);

// function solution(numbers) {
//     let max = numbers[0];
//     for(i=0; i<numbers.length; i++){
//         if(max < numbers[i]){
//             max = numbers[i];
//         }
//     }
//     console.log(max);
//     console.log(numbers.indexOf(max) + 1);
// }


// function solution(numbers) {
//     let max = 0;
//     for(i=0; i<numbers.length; i++){
//         if(max < numbers[i]){
//             max = numbers[i];
//         }
//     }
//     console.log(+max);
//     console.log(numbers.indexOf(max) + 1);
// }


// console.log(numsbers.indexOf(numsbers[i])) 넘버i값은 true값만 들어와서 정확한 자리가 아님