const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    let sumNum;
    let count = 0;
    let input = N;
    // while(true) 를 쓰고 싶지않아서 / N의 결과값을 바꿔줄수 있도록 변수에 할당해줌.
    while(sumNum !== N){
        let result = Math.floor((input/10)) + (input%10);
        sumNum = (input%10)*10 + result%10;
        input = sumNum; // 결과값 업데이트
       count++;
    }
    console.log(count);
} 
// ---------------- 이전(틀린) 코드 ----------------
function solution(N) {
    let sumNum;
    let count = 0;
    while(sumNum !== N){
        sumNum = Math.floor((N/10)) + (N%10) ;
        N = (N%10)*10 + sumNum%10;
       count++;
       break;
    }
    console.log(count);
} // N값에 결과값을 넣었기때문에 무한루프가 걸림 while 조건문에 있는 N은 더 이상 초기값이 아니게 됨