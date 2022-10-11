# 1292번: 쉽게 푸는 문제
https://www.acmicpc.net/problem/1292

### 알고리즘 분류 
- 수학
- 구현

# 풀이방법
1. 수열배열을 생성한다.
    - 끝을 나타내는 값만큼의 길이를 가진 배열을 만든다.
    - 현재 숫자와 이 숫자가 배열에 넣어진 값을 카운팅할 상수가 필요
        - 숫자와 넣어진 횟수가 같가면 다음숫자를 넣는다.
2. 반복문을 사용하여 배열의 인덱스번호로 값을 더한다.

## 성공코드
```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((item) => Number(item));

const [num1, num2] = input;

solution(num1, num2)

function solution(startN, endN) {
    let arr = [];
    let num = 1;
    let count = 0;
    let answer = 0;
    while (arr.length <= endN) {
        arr.push(num);
        count++;
        if (num === count) {
            num++;
            count = 0;
        }
    }
    for(let i = startN -1; i < endN; i++){
       answer += arr[i];
    }
    console.log(answer)
}
```

## Refactor
```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [num1, num2] = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((item) => Number(item));

console.log(solution(num1, num2));

// 수열을 만드는 함수
function NumberList(arrLength) {
    let arr = [];
    let num = 1;
    let count = 0;

    while (arr.length < arrLength) {
        arr.push(num);
        count++;
        if (num === count) {
            num++;
            count = 0;
        }
    }
    return arr;
}

function solution(startNum, lastNum) {
    const arr = NumberList(lastNum).slice(startNum - 1);
    const answer = arr.reduce((acc, cur) => (acc += cur), 0);
    return answer;
}

```