const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(item=>+item);

solution(input[0], input[1]);

function solution(N, K) {
    const array = [];
    for(let i = 1; i<=N; i++){
        if(N % i === 0) array.push(i);
    }
    array[K - 1] === undefined ? console.log(0) : console.log(array[K -1]);
}