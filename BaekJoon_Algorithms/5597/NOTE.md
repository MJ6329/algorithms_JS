# 5597번 과제 안 내신 분..?
 https://www.acmicpc.net/submit/5597/46540685  
알고리즘 분류 
- 구현  
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