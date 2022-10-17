# 두 개 뽑아서 더하기

-   https://school.programmers.co.kr/learn/courses/30/lessons/68644

## 문제 설명

    정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

## 입력

    [2,1,3,4,1]

## 출력

    [2,3,4,5,6,7]

# 기존 성공 코드

#### 220519

```javascript
function solution(numbers) {
    var answer = [];
    const newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            newArr.push(numbers[i] + numbers[j]);
        }
    }
    answer = [...new Set(newArr)];
    answer.sort((a, b) => a - b);
    return answer;
}
```

# Refactor

## 시간

-   최장시간 : 0.95ms => 0.47ms
-   최단시간 : 0.05ms => 0.07ms

## 풀이방법

-   `pop()`으로 마지막 요소를 꺼내 배열에 남은 값들과 더해준다.
-   더한 값의 배열을 하나로 합쳐 중복제거와 정렬을 한다.

### Error

임시변수없이 반환하는 법을 생각해내지 못 함.

#### 221018

```javascript
function getSumArray(numbersArray) {
    const num = numbersArray.pop();
    return numbersArray.map((item) => num + item);
}

function solution(input) {
    const count = input.length;
    let result = [];
    for (let i = 1; i < count; i++) {
        result.push(...getSumArray(input));
    }
    result = [...new Set(result)].sort((a, b) => a - b);
    return result;
}
```
