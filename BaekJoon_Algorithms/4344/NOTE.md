# 4344번 평균은 넘겠지
- https://www.acmicpc.net/problem/4344
## 알고리즘 분류
- 수학
- 사칙연산
## 문제 
    대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

## 입력
    첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

    둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 
    점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
## 출력
    각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

# 기존 성공 코드
```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item=>item);

solution(input);

function solution(numbers) {
    const C = +(numbers.shift());
    for(let i=0; i<C; i++){
        let count = 0;
        const scoreArr = numbers[i].split(' ').map(item=>+item)
        scoreArr.splice(0, 1);
        const sum = scoreArr.reduce((acc, cur) => {
            return acc + cur;
        },0);
        const avg = sum / scoreArr.length;
        scoreArr.forEach(el => {
            if(el > avg){
                count++;
            }
        })
        const result = ((count / scoreArr.length) * 100).toFixed(3);
        console.log(`${result}%`);;
    }
}
```

# Refactor
```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item);

const [testCaseCount, ...testCase] = input;

solution(testCaseCount, testCase);

function solution(loop, scores) {
    for (let i = 0; i < loop; i++) {
        const [scoreCount, ...scoreArr] = scores[i]
            .split(" ")
            .map((item) => +item);

        const avg = scoreArr.reduce((acc, cur) => acc + cur, 0) / scoreCount;
        const overAvgCount = scoreArr.filter((score) => score > avg).length;

        console.log(`${((overAvgCount / scoreCount) * 100).toFixed(3)}%`);
    }
}
```