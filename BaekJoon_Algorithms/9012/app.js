const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(input){
    const N = input[0]
    for(let i = 1; i<=N; i++){
        const answer = [];
        let result = "YES"
        for(let j=0; j<input[i].length; j++){
            if(input[i][j] === "(") answer.push(input[i][j]);
            if(input[i][j] === ")"){
                if(!answer.pop()){
                    result = "NO"
                    break;
                }
            }
       }
       if(answer.pop()) result = "NO";
       console.log(result);
    }
}