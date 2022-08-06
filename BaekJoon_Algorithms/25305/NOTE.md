# 25305번 커트라인
https://www.acmicpc.net/problem/25305

### 알고리즘 분류
- 정렬

# 풀이 방법
- 점수를 오름차순으로 정렬한다.
- 상을 받는 사람의 수 -1 번째 점수를 출력한다.

# 성공 코드
```javascript
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n'); 

const num = parseInt(input[0].split(' ')[1]);
const score = input[1].split(' ').map(item => +item);

 solution(num, score);

function solution(N, S) {
    S.sort((a,b) => b - a);
    console.log(S[N - 1]);
};
```

# 느낀점
아직 문자열이나 배열을 나누는것이 서투르다.