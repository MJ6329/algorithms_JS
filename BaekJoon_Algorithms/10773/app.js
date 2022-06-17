const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(item => +item);

solution(input);

function solution(numbers) {
    let nums = [];
    const N = numbers.shift();
    for(let i=0; i<N; i++){
        if( numbers[i] !== 0) {
            nums.push(numbers[i]);
        } else {
            nums.pop();
        }
        
    }
    const answer = nums.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    console.log(answer);
};