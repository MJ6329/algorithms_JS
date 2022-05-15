const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(item=>item);
const first = (input[0]);
const second = (input[1]);
solution(first, second);

function solution(F, S) {
    const newF = +(F.split('').reverse().join('')); //백의자리 숫자이니 가운데 숫자는 항상 같으니 숫자를 그냥 뒤집기로함
    const newS = +(S.split('').reverse().join(''));
    const result = newF > newS ? newF : newS; 
    console.log(result);
}

/*
입력받을때 map을 쓰지않고 매개변수를 하나만 받아서 
const [newF, newS] = input.map(el=> [...el].revers().join());
더 간단하게 작성 가능하다.
*/

