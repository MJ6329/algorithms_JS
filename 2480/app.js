const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0],input[1],input[2]);

function solution(a, b, c) {
    if(a === b && a === c && b === c){ // a === b === c 라고 했다가 틀렸음
        console.log(10000 + a * 1000);
    }
    if(a != b || a != c || b != c){
        if(a === b || a === c ){
           console.log(1000 + a * 100);
        } 
        if(b === c){
            console.log(1000 + b * 100);
        }
    } 
    if (a != b && a != c && b != c){
        const sort = [a,b,c].sort(); // [1, 2, 3]
        console.log(sort.pop() * 100); // pop => 마지막 요소를 제거하고 요소 반환 
    }

}

