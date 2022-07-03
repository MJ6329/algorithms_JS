const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => +item);

solution(input);

function solution(N) {
    let fakeMen = [];
    N.sort((a,b) => a-b);
    const fakeMenHeight = N.reduce((acc,curr) => acc + curr) - 100;
    for(let i=0; i<8; i++){
        for(let j=i+1; j<9; j++){
            if((N[i] + N[j]) === fakeMenHeight) {
                fakeMen.push(N[i]);
                fakeMen.push(N[j]);
                break;
            }
        }
        if(fakeMen) break;
    }
    const answer = N.filter(item => !fakeMen.includes(item));
    for(let i=0; i<7; i++) console.log(answer[i]);
}