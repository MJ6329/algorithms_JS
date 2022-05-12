const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(sArr) {
    for(let i=1; i<=sArr[0]; i++){
        const R = +(sArr[i].split(' ')[0]); //첫 요소를 뽑아 몇번 반복할지
        const S = sArr[i].split(' '); // 숫자와 문자를 나누어준다
        const result = S[1].split('').map(item => item.repeat(R)).join(''); 
        // 나눈 배열에서 첫번째 값을 가져와 문자를 하나씩 나누어줌 repeat를 사용해 반복
        console.log(result);
    }
}
// 첫 줄도 문제인 줄 알고 공백 때문에 split가 먹히지 않아 애를 먹었다.
// i 를 1부터 세어서 첫줄은 건너 뛰고 실행 런타임에러 배열의 길이만큼 돌게해서 그런듯 (문제를 잘못 읽음의 연장선)

