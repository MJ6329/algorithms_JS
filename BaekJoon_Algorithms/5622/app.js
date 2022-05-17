const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(N) {
    const  alphabets = N.join('').split('');

    const dial = { 
        // key를 원래 값으로 주면 time에 alphabets의 길이만큼 값을 추가 해 준다.
        3 : ['A', 'B', 'C'],
        4 : ['D', 'E', 'F'],
        5 : ['G', 'H', 'I'],
        6 : ['J', 'K', 'L'],
        7 : ['M', 'N', 'O'],
        8 : ['P', 'Q', 'R', 'S'],
        9 : ['T', 'U', 'V'],
        10 : ['W', 'X', 'Y', 'Z'],
    };

    let time = 0;
    for(let i=0; i < alphabets.length; i++){
        for(num in dial){
            if(dial[num].includes(alphabets[i])){
                time +=  +num;
            }
        }
    }
    console.log(time);
}

