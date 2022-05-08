const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

// i++은 실행하고서 값을 높여줌
// i=0 이면 i<N i=1 이면 i<=N
function solution(N) {
    let answer = '';
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N -i -1; j++){
        // i가 0부터 시작해서 n-0 =5 가 됨 첫출에 공백 5개가 나옴 그래ㅐ서  1을 빼줘야함
            answer += ' ';
        }
        for(let k = 0; k <= i; k++){
            answer += '*';
        }
            answer += '\n';
        }
        console.log(answer);
}


