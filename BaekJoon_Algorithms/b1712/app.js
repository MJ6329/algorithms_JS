const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(item=>+item);

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
    const margin = A / (C - B); 
    let result = Math.floor(margin) + 1; // 고정비용 / (판매비 - 가변비용) = 최소판매갯수 이익이 남는 시점은 이 다음부터니까 1을 더해줌
    B >= C ? (result = -1) : result; // 인건비가 판매비용과 같거나 크면 이익이 날 수 없음
    console.log(result);
}

// 반복문으로 해 보았는데 입력에 > 21억 이하의 자연수 < 를 받기 때문에 방향을 바꿈 


