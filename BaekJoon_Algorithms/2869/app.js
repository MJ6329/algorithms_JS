const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(item=>+item);

const up = input[0];
const down = input[1];
const goal = input[2];

solution(up, down, goal);

function solution(A, B, V) {
    //  정상에 도착 한 후에는 미끄러지지 않으니 미끄러지는 값을 미리 빼 준다.
    // 오르는 값과 미끄러지는 값을 빼서 나누어 주면 며칠이 걸리는지 알 수 있다.
    // 딱 맞아 떨어지지않으면 하루가 더 필요하니 ceil를 써 준다.
    const days = Math.ceil((V - B) / (A - B));
    console.log(days);
}

