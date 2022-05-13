const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(str) {
    const array = new Array(26).fill(0); // 알파벳 갯수만큼 (카운팅할) 0을 채운 배열 생성
    str = str.join().toUpperCase(); // 문자열로 만들고 대문자로 변환
    for(let i=0; i<str.length; i++){
        array[str.charCodeAt(i) - 65] ++; // A가 65부터 시작하므로 65-65 = 0인덱스가 A 알파벳에 맞는 자리 카운팅
    }
    const max = Math.max(...array); // 가장 많이 쓰인 알파벳 수
    const index = array.indexOf(max);  // 그 알파벳의 인덱스
    const result = array.filter(el => el === max).length >= 2 ? '?' : String.fromCharCode(index+65);
    // filter 로 배열에 같은 값이 있는지 확인
    // === 2 로 비교했었는데 같은 숫자가 2개 이상 있을 수도 있으니 >= 2 로 처리
    console.log(result);
}
// for문을 또 사용하고 싶지 않아서 삽질을 많이 함