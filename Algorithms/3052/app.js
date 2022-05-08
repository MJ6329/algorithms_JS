let fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((item) => +item);

solution(input);

function solution(numbers) {
    const result = new Set(numbers.map(item => item % 42)).size;
    console.log(result);
    
} 

// https://blogpack.tistory.com/1068

// function solution(numbers) {
//     result = numbers.map((item) => {
//         return item % 42;
//     });
//     const remainderArray = [...new Set(result)];
//     console.log(remainderArray.length);
    //이 답도 맞음 입력받는게 문제였음 trim()
// } 


// function solution(numbers) {
//     result = numbers.map((item) => {
//         return item % 42;
//     });
//     for(i=0; i<result.length; i++){
//         let count = 0;
//         for(j=0; j<result.length; j++){
//         if(result[j] != result[i]){
//             count++;
//             }
//         }
//         console.log(count);
//     }
// } 처음시도 : 카운트값을 가져오는곳에서 막힘

// result.forEach((i) => {
//     if(!remainderArray.includes[i]){
//         remainderArray.push(i);
//     }
// })
// console.log(remainderArray)