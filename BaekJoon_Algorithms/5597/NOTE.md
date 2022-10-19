# 5597번 과제 안 내신 분..?
 https://www.acmicpc.net/submit/5597/46540685  
## 알고리즘 분류 
- 구현  

## 문제
    X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.

    교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.
## 입력
    입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.
## 출력
    출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.
# 풀이 방법
- for문을통해 i의 값을 하나씩 증가시키면서 includes를통해 값이 있는지 확인.
- i의 값이 없다면 바로 출력한다.
    - 제출 하지않은 학생은 2명이므로 빈 배열을 하나 선언해 제출하지않은 학생을 찾았을 때 넣어준다. 2명이 다 채워지면 더 이상 확인 할 필요가 없으므로(다 찾았으므로) break를 통해 반복문을 빠져나온다.
# 성공 코드
- 메모리 : 9332KB
- 시간 : 120ms
```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => +item); 

solution(input);

function solution(N) {
    let result = [];
    for(let i=1; i<=30; i++){
        if(!N.includes(i)) {
            console.log(i)
            result.push(i)
        }
        if(result.length === 2) break;
    }
};
```
---
# 실패 코드
틀린 이유
- 28명의 학생만 제출했기 때문에 28번만 반복문을 돌면 된다고 생각했다.
    - 이 때 사용하는 조건의 범위는 횟수가 아닌 출석번호였음을 망각하고 있었다.
    - 이렇게 되면 제출하지않은 학생의 번호가 29,30 일때 28번에서 끝나버리기 때문에 찾을수 없게 된다.
```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => +item); 

solution(input);

function solution(N) {
    for(let i=1; i<=28; i++){
        if(!N.includes(i)) console.log(String(i))
    }
};
```
# Refactor
- 학생은 언제나 30명으로 고정되어있기 때문에 1-30까지의 배열을 만든다.
- filter를 사용해 리스트에 없는 값을 받는다.
- 항상 2개의 결과만 출력하기 때문에 join()을 사용하여 출력
```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

const answer = Array.from({ length: 30 }, (v, i) => i + 1)
    .filter((number) => !input.includes(number))
    .join("\n");

console.log(answer);
```