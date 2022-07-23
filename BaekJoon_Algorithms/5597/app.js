const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => +item); 

solution(input);

function solution(N) {
    let result = [];
    for(let i=1; i<=30; i++){
        if(!N.includes(i)) {
            console.log(i)
            result.push(i)
        }
        if(result.length === 2) break;
    }
};
