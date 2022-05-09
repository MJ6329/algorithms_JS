const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString(); //map을써서 입력을 잘 못 받고있었음 입력 주의

solution(+input);

function solution(N) {
    let result = 0;
    for(let i = 1; i <= N; i++){
        if(i < 100){ // 99까지 한수로 취급하기때문에 100보다 작을때 카운팅
            result++;
        }
        // i[0] - i[1] 로 해 보았는데 애초에 i는 숫자라서 인덱스로 뽑을 수 없다 문자로 바꿔준뒤 하나씩 뽑아서 다시 숫자로 바꿔준다
        let num = String(i);
        let first = (+num[0]) - (+num[1]);
        let second = (+num[1]) - (+num[2]);
        if(first === second){
            result++;
        } 
    }
    console.log(result);
}

