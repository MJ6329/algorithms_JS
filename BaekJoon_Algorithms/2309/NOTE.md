# 2309번 일곱 난쟁이

-   https://www.acmicpc.net/problem/2309

### 문제

    난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.

    아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.

    아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

### 입력

    아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

### 출력

    일곱 난쟁이의 키를 오름차순으로 출력한다. 일곱 난쟁이를 찾을 수 없는 경우는 없다.

# 풀이 방법

-   가짜 난쟁이들을 담을 빈 배열을 생성한다.
-   i와 j를 포인터로 사용하여 이동한다
    -   i + j를 합한 값이 가짜 난쟁이 키의 합과같다면 배열에 넣어준다.
-   join을 사용하여 한 번에 모아 출력해준다.

# 실패 코드

-   시간 초과
    이중 for문을 사용하지 않으려다 결국 시간초과가 나 버렸다.

```javascript
function pickFakeMans(fakeArray) {
    const totalHeight = fakeArray.reduce((acc, cur) => acc + cur, 0);
    const fakeMansHeight = totalHeight - 100;
    const fakeMans = [];
    let total = 0;
    let i = 0;
    let j = i + 1;
    while (total !== fakeMansHeight) {
        total = fakeArray[i] + fakeArray[j];
        if (total === fakeMansHeight) {
            fakeMans.push(fakeArray[i]);
            fakeMans.push(fakeArray[j]);
            return fakeMans;
        }
        j++;
        if (j === fakeArray.length - 1) {
            i++;
            j = i + 1;
        }
    }
}

function solution(arr) {
    const fakeMans = pickFakeMans(arr);
    const result = arr
        .filter((height) => !fakeMans.includes(height))
        .sort((a, b) => a - b);
    console.log(result.join("\n"));
}
```

# 성공 코드

-   이중 for문 사용
-   `isFind`를 사용하여 불필요한 반복을 제외

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

solution(input);

function solution(fakeArray) {
    const fakeMensHeight = fakeArray.reduce((acc, cur) => acc + cur, 0) - 100;
    let isFind = false;
    let fakeMens = [];
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (fakeArray[i] + fakeArray[j] === fakeMensHeight) {
                fakeMens.push(fakeArray[i]);
                fakeMens.push(fakeArray[j]);
                isFind = true;
                break;
            }
        }
        if (isFind) {
            break;
        }
    }
    const result = fakeArray
        .filter((height) => !fakeMens.includes(height))
        .sort((a, b) => a - b);
    console.log(result.join("\n"));
}
```
