# 음계

-   https://www.acmicpc.net/problem/2920

## 알고리즘 분류

-   구현

## 문제

    다장조는 c d e f g a b C, 총 8개 음으로 이루어져있다. 이 문제에서 8개 음은 다음과 같이 숫자로 바꾸어 표현한다. c는 1로, d는 2로, ..., C를 8로 바꾼다.
    1부터 8까지 차례대로 연주한다면 ascending, 8부터 1까지 차례대로 연주한다면 descending, 둘 다 아니라면 mixed 이다.
    연주한 순서가 주어졌을 때, 이것이 ascending인지, descending인지, 아니면 mixed인지 판별하는 프로그램을 작성하시오.

## 입력

    첫째 줄에 8개 숫자가 주어진다. 이 숫자는 문제 설명에서 설명한 음이며, 1부터 8까지 숫자가 한 번씩 등장한다.

## 출력

    첫째 줄에 ascending, descending, mixed 중 하나를 출력한다.

# 기존 성공 코드

```javascript
const fs = require("fs");
const { deflate } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

solution(input);

function solution(N) {
    let result = [];
    for (let i = 0; i < N.length - 1; i++) {
        result.push(N[i] - N[i + 1]);
    }
    if (result.every((item) => item === -1)) {
        console.log("ascending");
    } else if (result.every((item) => item === 1)) {
        console.log("descending");
    } else {
        console.log("mixed");
    }
}
```

# Refactor

-   '1-8', '8-1' 두가지 상황일때와 아닐때로 분리가 되기 때문에 다른 로직은 필요 없을거 같다.
-   if, elseif문을 `switch`로 변경
    -   배열에 넣는것이아닌 문자열로 비교하여 결과를 산출했다.

```javascript
const fs = require("fs");
const { deflate } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);

function solution(numberList) {
    switch (numberList.join("")) {
        case "12345678":
            console.log("ascending");
            break;
        case "87654321":
            console.log("descending");
            break;
        default:
            console.log("mixed");
            break;
    }
}
```
