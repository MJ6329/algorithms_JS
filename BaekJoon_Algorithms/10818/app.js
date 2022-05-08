const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputN = input[0].split(' ').map((item) => +item);
const arrayA = input[1].split(' ').map((item) => +item);

solution(inputN, arrayA);

function solution(N, nums) {
    let max = -1000000; // 둘 다 값을 0으로 줬었는데 그럼 min값이 전부 false가 돼서 값이 안나옴
    let min = 1000000;  // max, min 값에 처음 값을 넣어놓고 비교시작
    for(let i=0; i<N; i++){
        if(max < nums[i]){
            console.log(max)
            max = nums[i];
        }
        if(min > nums[i]){
            min = nums[i];
        }
    }
    console.log(min,max);
} 

// --------------------------------------------------------

// const arrayA = input[1].split(' ').map((item) => +item);

// solution(arrayA);

// function solution(nums) {
//     console.log(Math.min(...nums),Math.max(...nums));
// } 

// 정답이긴 하나 출제의도랑 안 맞는거 같음 
// ES6/ES2016의 destructing 할당을 통해 더 쉬워집니다. 
// destructing 할당 구문은 어레이 또는 개체에서 데이터를 추출하여 별도의 변수로 만들 수 있는 JavaScript 식입니다.



