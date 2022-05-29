const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString(); 

solution(input);

function solution(N) {
    for(let i=0; i<N.length; i+=10){
        console.log(N.slice(i, i + 10));
    }
}
