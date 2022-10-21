# 2869번 달팽이는 올라가고싶다.
- https://www.acmicpc.net/problem/2869
## 문제
    땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.

    달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에 올라간 후에는 미끄러지지 않는다.

    달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.
## 입력
    첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. (1 ≤ B < A ≤ V ≤ 1,000,000,000)

## 출력
    첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.
---
# 기존 성공 코드
- 정상에 도착 한 후에는 미끄러지지 않으니 미끄러지는 값을 미리 빼 준다.
- 오르는 값과 미끄러지는 값을 빼서 나누어 주면 며칠이 걸리는지 알 수 있다.
- 딱 맞아 떨어지지않으면 하루가 더 필요하니 ceil를 써 준다.
```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(item=>+item);

const up = input[0];
const down = input[1];
const goal = input[2];

solution(up, down, goal);

function solution(A, B, V) {
    const days = Math.ceil((V - B) / (A - B));
    console.log(days);
}
```
# Refactor
```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((item) => +item);

const [up, down, goal] = input;

console.log(solution(up, down, goal));

function solution(climb, slip, woodenStick) {
    return Math.ceil((woodenStick - slip) / (climb - slip));
}
```