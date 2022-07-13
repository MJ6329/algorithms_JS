# 고득점 Kit 해시 (Level 1)
- ## 문제링크
    - https://school.programmers.co.kr/learn/courses/30/lessons/1845
---
# 문제 이해
- 아무리 다양한 조합의 폰켓몬을 가질 수 있어도 최대 N/2수 만큼의 폰켓몬만 얻을 수 있다.
    - Set 사용
- 폰켓몬의 종류가 최대 200,000개 이기 때문에 중복을 제거하고서 또 다시 테이블화 시킬 필요성을 못 느꼈다.
- 폰켓몬의 종류가 N/2보다 작으면 결국 얻는 폰켓몬은 **종류의 갯수** 이다.

# 풀이코드
- 먼저 최대로 가질수있는 max의 값을 지정한다.
- nums값을 전개연산자로 받아 Set으로 중복을 제거 해 준다.
- max값과 폰켓몬의 종류를 비교하여 max값보다 작다면 monsterList의 값을 크다면 max값을 리턴한다.
```javascript
function solution(nums) {
    let answer = 0;
    const max = nums.length/2;
    const monsterList = [...new Set(nums)];
    return answer = max < monsterList.length ? max : monsterList.length;
};
```
