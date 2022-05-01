let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let hour = Number(input[0]);
let min = Number(input[1]);

if(min-45 < 0){ //현재 분이 45분보다 적으면
    min = (min+60) -  45; //시간을 받아와서 빼준다
    hour--; // 시간 감소
    
    if(hour === -1){ //만약 시간 감소 했을때 음수가 되면 23시로 고쳐줌
     hour = 23;
   }
} else {
    min -= 45;
}

console.log(hour,min);