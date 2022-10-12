# 2581번 소수

https://www.acmicpc.net/problem/2581

### 알고리즘 분류

-   수학
-   정수론
-   소수 판정

# 풀이 방법

1. 소수 판별을하여 배열에 담아준다.
    - 1과 자신의 숫자로만 나눠지는 값이 소수이기 때문에 for문으로 2부터 나눈다.
    - 나머지가 0이 되지않으면 배열에 따로 넣어준다.
2. 빈 배열이면 -1을 반환한다.

---

## Error

-   1,2,3 을 생각을 못 했다.
    -   1은 소수가아니며 2,3은 소수이다.
    -   for문의 조건은 i의 값이 현재값보다 작을때 실행되는데 2와 i의 값이 같기때문에 반복문이 실행되지 않는다.
-   3이하의 숫자를 따로 처리하는 로직도 작성했었으나 시간초과.

# 실패 코드

```javascript
const { count } = require("console");
const fs = require("fs");
const { isReadable } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((item) => +item);

function getPrimeNumber(num1, num2) {
    const numbers = Array.from({ length: num2 - num1 + 1 }, (_, i) => num1 + i);
    let arr = [];
    let countNum = numbers[0];
    for (let i = 2; i < countNum; i++) {
        if (countNum === num2 + 1) break; // 현재값이 최대값과 같으면 끝
        if (countNum % i === 0) {
            i = 2;
            countNum++;
        } else if (i === countNum - 1 && !(countNum % i === 0)) {
            arr.push(countNum);
            i = 2;
            countNum++;
        }
    }
    return arr.length === 0 ? -1 : arr;
}

function printResult(num1, num2) {
    const result = getPrimeNumber(num1, num2);
    if (result === -1) {
        return console.log(-1);
    } else {
        let sum = 0;
        result.forEach((item) => (sum += item));
        console.log(sum);
        console.log(result[0]);
    }
}
```

## 풀이

-   범위의 숫자들을 먼저 배열에 넣고 시작했었는데, 소수인지 판정을 한 후 값을 배열에 넣는 방식
-   문제였던 2의 판정
    -   `for (let i = 2; i < num; i++)` 문을 통해 나머지가 없다면 `false`를 반환하면서 넘어간다.
    -   2 자체는 반복문조차 실행이 되지않아 `true`를 반환한다.

### 참고 사이트

-   https://todayscoder.tistory.com/entry/JS%EB%B0%B1%EC%A4%80-2581%EB%B2%88-%EC%86%8C%EC%88%98

# 성공 코드

```javascript
const { count } = require("console");
const fs = require("fs");
const { isReadable } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((item) => +item);

const [minNum, maxNum] = input;
let arr = [];

function isPrimeNumber(num) {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = minNum; i <= maxNum; i++) {
    if (isPrimeNumber(i)) {
        arr.push(i);
    }
}

function printResult(arr) {
    let total = 0;
    arr.forEach((item) => (total += item));
    console.log(total);
    console.log(arr[0]);
}

arr.length === 0 ? console.log(-1) : printResult(arr);
```

---

# Refactor

```javascript
const { count } = require("console");
const fs = require("fs");
const { isReadable } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((item) => +item);

const [minNum, maxNum] = input;

solution(minNum, maxNum);

function isPrimeNumber(num) {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        if (isPrimeNumber(i)) {
            arr.push(i);
        }
    }
    if (arr.length === 0) {
        console.log(-1);
    } else {
        const total = arr.reduce((acc, cur) => (acc += cur), 0);
        console.log(total);
        console.log(arr[0]);
    }
}
```
