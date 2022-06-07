# TIL

문제 풀면서 알게 된 정보 조각들 기록

# 목차

-   [문자열](#문자열)  
    -   [parseInt VS Number](#parseInt-VS-Number)
    -   [아스키코드](#아스키코드) 
-   [배열](#배열)  
    -   [includes](#includes)  
    -   [slice VS splice](#slice-VS-splice)  
    -   [sort AND localeCompare](#sort-AND-localeCompare)  
-   [반복문](#반복문)  
    -   [for...in](#for...in)  

# 문자열

-   [목차](#목차)
    -   [parseInt VS Number](#parseInt-VS-Number)
    -   [아스키코드](#아스키코드)

## parseInt VS Number   

-   parseInt() : 숫자(정수)만 출력.

```javascript
let test = "20세";
parseInt(test); //20

let test = "올해 20세";
parseInt(test); //NaN (숫자로 시작해야 한다.)

let test = "123.4567";
parseInt(test); // 123
```

-   Number() : 문자열이 숫자 일때만 출력.

```javascript
let test = "20세";
Number(test); //NaN

let test = "123.4567";
Number(test); // 123.4567
```

## 아스키코드

-   charCodeAt : 문자열 => 아스키코드

```javascript
문자열.charCodeAt(index);
```

-   fromCharCode : 아스키코드 => 문자열

```javascript
String.charCodeAt(아스키코드 번호);
```

---

# 배열

-   [목차](#목차)
    -   [includes](#includes)  
    -   [slice VS splice](#slice-VS-splice)  
    -   [sort AND localeCompare](#sort-AND-localeCompare)  

## includes

`arr.includes(valueToFind[, fromIndex])`

-   배열이 특정 요소를 포함하고 있는지 boolean 값으로 반환
-   문자나 문자열을 비교할 때, **대소문자를 구분**

## slice VS splice 
star 인덱스가 음수 일 경우 배열의 끝에서부터의 길이를 나타냄  
end 인덱스를 생략하면 배열의 끝까지를 의미

-   slice()  `array.slice([start{, emd]])`  
    - 배열을 얕게 복사해 배열객체를 반환 (원본배열 수정X) 
    - start가 undefined면 0부터 시작  
```javascript
let arr = [1,2,3,4,5]

let arr1 = arr.slice(2,); // [3,4,5] 
let arr2 = arr.slice(-2); // [4,5]
let arr3 = arr.slice(7); // []
```  
-   splice() `array.splice(start[, deleteCount[, addItem1[, addItem2[, ...]]]])`  
    - 배열의 요소를 삭제, 교체, 추가하여 내용을 변경 (원본배열 수정O)  
    - deleteCount : 생략가능
    - addItem1...2... : 지정하지 않으면 요소 제거만 수행.
    - 아무것도 제거하지 않았을 시 빈 배열을 반환함.
```javascript
let arr = [1,2,3,4,5];

let arr1 = arr.splice(2, 1, 'apple'); 
// arr = [1, 2, 'apple', 4, 5]
// arr1 = [3]
```   
## sort AND localeCompare  
- sort()  
    -   한 번에 두 매개변수 값을 받아 배열의 모든 값을 비교한다.  
```javascript
  if(a > b) return 1; // 1 > 0  ba순
  if(a < b) return -1; // -1 < 0 ab순
  if(a === 0 ) return 0; // 변동없음
```
- localeCompare  
    - 참조 문자열이 정렬 순서에서 지정된 문자열의 앞이나 뒤에 오는지 또는 지정된 문자열과 동일한지 여부를 나타내는 숫자를 반환  
    > -1 또는 1 같은 정확한 반환값에 의존하지 말 것!! 일부 브라우저는 -2, 2 값을 반환 할 수도 있다.  
 ```javascript
  'a'.localeCompare('c') // -2 or -1
  'c'.localeCompare('a') // 2 or 1
  ```

---

# 반복문

-   [목차](#목차)
    -   [for...in](#for...in)  

## for...in

`for (variable in obj) {...}`

> variable : 매 반복마다 다른 속성이름이 변수로 지정
> object : 반복작업을 수행 할 열거형 속성을 가지고 있는 객체

-   객체의 키 값의 수 만큼 반복하여 작업 수행 (모든 객체에서 사용 가능)
-   객체의 모든 열거 가능한 속성에 대해 반복
-   key값 과 value 값을 뽑아 낼 수 있음

```javascript
const object = {a:1, b:2, c:3};
for(const property in object){
console.log(`${property}: ${object[property]}`);
// a: 1
// b: 2
// c: 3

console.log(object[property]) // value 만 가져 올 수 있다.
// 1
// 2
// 3
```
