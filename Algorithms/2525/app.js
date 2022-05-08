const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let curHour = input[0].split(' ')[0]
let curMin = input[0].split(' ')[1]
let cookTime = input[1]

solution(+curHour, +curMin, +cookTime);

function solution(hour, min, time) {
    min += time //분에 직접 시간을 더해 줬음
    if(min >= 60){
        hour += Math.floor(min / 60); 
        min %= 60;
        if(hour >= 24){ // 더해서 시간이 24를 넘어 갈 때를 대비
            hour %= 24 ;
        }
    }

    console.log(hour, min);
}

-------------------------------------------------------------------------------
// 처음 작성한 코드 출력은 잘 되나 백준에서는 틀렸다고 뜸
// total 변수를 지정해 주지 않아서 그런가 싶었는데 결과는 똑같음

function solution(hour, min, time) {
    let total = 0;
    total = min + time;
    if(total >= 60){
        hour += Math.floor(total / 60);
        min = total % 60;
        if(hour >= 24){
            hour %= 24 ;
        }
    }

     console.log(hour, min);
}