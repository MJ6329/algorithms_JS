const fs = require('fs');
const { deflate } = require('zlib');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

solution(input);

function solution(N) {
    let result =[]
    for(let i=0; i<N.length-1; i++){
        result.push(N[i] - N[i+1])
    }
    if(result.every(item => item === -1)){
        console.log('ascending');
    }else if(result.every(item => item === 1)){
        console.log('descending');
    } else {
        console.log('mixed');
    }
}
