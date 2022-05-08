# TIL 
문제 풀면서 알게 된 정보 조각들 기록

# 목차
  * [문자열](#문자열)

# 문자열
* [목차](#목차) 
  * [parseInt() 와 Number() 의 차이](#parseInt()-와-Number()-의-차이) 
 
 
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
