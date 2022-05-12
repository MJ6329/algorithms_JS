let fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item) => +item);

solution(input);

//124ms
function solution(numbers) {
    let total = String(numbers[0] * numbers[1] * numbers[2]); //하나씩 비교하기위해 문자열로 변경해준다
    for(let i=0; i<=9; i++){
        let count = 0; //i번째 숫자마다 0으로 초기화해서 카운팅
        for(j=0; j<total.length; j++){
            if(+total[j] === i) //i에 숫자가 들어오기때문에 숫자로비교 아니면 == 으로
            count++;
        }
        console.log(count);
    }
}


// 단어공부 문제 풀다가 여기에도 적용할 수 있을거같아 다시 풀어 보았다.
//120ms
function solution(numbers) {
    const total = String(numbers[0] * numbers[1] * numbers[2]);
    const array = new Array(10).fill(0);
    for(let i=0; i<total.length; i++){
        array[total[i]]++;
    }
    const result = array.join('\n');
    console.log(result);
}