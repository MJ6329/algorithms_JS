# 10871번 X보다 작은 수 
- https://www.acmicpc.net/problem/10871
## 알고리즘 분류
- 구현
## 문제
    정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

## 입력
    첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

    둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.
## 출력
    X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.
---
# 기존 성공 코드
```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [inputN, inputX] = input[0].split(' ').map((item) => +item);
const arrayA = input[1].split(' ').map((item) => +item);

solution(inputN, inputX, arrayA);

function solution(N, X, A) {
    const newArray = [];
    for(let i=0; i<=N; i++){
        if(A[i] < X){
            newArray.push(A[i]);
        }
    }
    console.log(newArray.join(' '));
}
```
# Refactor
- split을 통해 배열로 만든뒤 filter를 통해 작은 숫자를 거른다.
- join을 통해 문자열로 출력
```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(getNumbers(input));

function getNumbers([countNumbers, numberList]) {
    const [count, minNumber] = countNumbers.split(" ");
    return numberList
        .split(" ")
        .filter((number) => parseInt(number) < minNumber)
        .join(" ");
}
```