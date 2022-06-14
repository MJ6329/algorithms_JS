const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution (input){
    const N = parseInt(input.shift());
    let stack = [];
    let answer = [];
    for(let i=0; i<N; i++){
        switch (input[i]){
            case 'pop':
                answer.push(stack.length !== 0 ? stack.pop() : -1);
                break;

            case 'size':
                answer.push(stack.length);
                break;

            case 'empty':
                answer.push(stack.length !== 0 ? 0 : 1);
                break;

            case 'top':
                answer.push(stack.length !== 0 ? stack[stack.length-1] : -1);
                break;

            default:
                stack.push(input[i].split(' ')[1]);
                break
        }
    }
    console.log(answer.join('\n'))
}