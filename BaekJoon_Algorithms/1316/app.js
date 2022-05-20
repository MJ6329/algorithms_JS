const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(N) {
    const caseCount = +(N[0]); //반복 할 수를 나눠준다
    let count = 0;
    for(let i=1; i<=caseCount; i++){
        let newArr = []; 
        let str = N[i];
        for(let j=0; j<str.length; j++){
            if(!newArr.includes(str[j]) || str[j-1] === str[j]){ //배열에 없거나 있어도 연속되는 문자면 넣어준다
                newArr.push(str[j]);
            }
        }
        const resultArr = newArr.join(''); //단어로 만들어준다  
        if(str === resultArr){ //str[i] 값과 resultArr[i] 값을 비교하여 똑같다면 count 를 올려준다.
            count++;
        }
    }
    console.log(count);
}

// 더 간단하게 짜 보기