# TIL 
문제 풀면서 알게 된 정보 조각들 기록

# 목차
  * [문자열](#문자열)
  * [배열](#배열)
  * [반복문](#반복문)

# 문자열
* [목차](#목차) 
  * [parseInt() 와 Number() 의 차이](#parseInt()-와-Number()-의-차이) 
  * [아스키코드](#아스키코드)
 
 
## parseInt() 와 Number() 의 차이
* parseInt() : 숫자(정수)만 출력.   
```javascript
  let test = "20세"
  parseInt(test); //20
  
  let test = "올해 20세"
  parseInt(test); //NaN (숫자로 시작해야 한다.)
  
  let test = "123.4567"
  parseInt(test); // 123
  ```
* Number() : 문자열이 숫자 일때만 출력.
 ```javascript
  let test = "20세"
  Number(test); //NaN
  
  let test = "123.4567"
  Number(test); // 123.4567
  ```
  
  ## 아스키코드
  - charCodeAt : 문자열 => 아스키코드
  ```javascript
 문자열.charCodeAt(index);
  ```
  - fromCharCode : 아스키코드 => 문자열
  ```javascript
String.charCodeAt(아스키코드 번호);
  ```
 - - - 
  
# 배열
* [목차](#목차) 
  * [includes()](#includes())

## inclludes()
`arr.includes(valueToFind[, fromIndex])`
- 배열이 특정 요소를 포함하고 있는지 boolean 값으로 반환  
- 문자나 문자열을 비교할 때, **대소문자를 구분**   

- - -

# 반복문
- [목차](#목차)
 - [for ...in](#for-...in)

## for ...in
`for (variable in obj) {...}`
> variable : 매 반복마다 다른 속성이름이 변수로 지정
> object : 반복작업을 ㅜ행할 열거형 속성을 가지고 있는 객체
- 객체의 키 값의 수 만큼 반복하여 작업 수행 (모든 객체에서 사용 가능)
- 객체의 모든 열거 가능한 속성에 대해 반복
- key값 과 value 값을 뽑아 낼 수 있음
```javascript
const obj = {a:1, b:2, c:3};
for(const property in object){
console.log(`${property}: ${object[property]}`);
// a: 1
// b: 2
// c: 3
```


  
