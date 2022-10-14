# 11650번 좌표정렬하기
- https://www.acmicpc.net/problem/11650
## 알고리즘 분류
- 정렬
## 문제
    2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
## 입력
    첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.
## 출력
    첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

---
# 풀이 방법
- 이차원 배열로 만들어 sort를 통해 비교
    - `0번째 인덱스`의 값이 같다면 `1번째 인덱스`끼리 비교한다.
- 최대 `100,000`개를 입력받기 때문에 한 곳에 모아서 출력한다.

## Error
- console.log를 했을 때 마지막 줄에 공백이 생겨 `console.log(answer)`로 출력했으나 실패'
    - 애초에 입력받을 때 공백이 있을 수 있으니 `trim()`을 사용해주자.


# 성공 코드
- `mpa`으로 전달받은 요소에 또 `map`을 사용하는 방법을 알았다.
```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(arr) {
    const [count, ...numbers] = arr;
    const newArray = numbers.map((num) =>
        num.split(" ").map((num) => parseInt(num))
    );
    const result = newArray.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    let answer = "";

    result.forEach((item) => (answer += `${item.join(" ")}\n`));
    console.log(answer);
}
```