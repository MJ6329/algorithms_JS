const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item=>item);

solution(input);

// 루프 돌 횟수를 아예 지정 해 줌
// foreach 대신 filter 를 써 보았는데 속도는 같으나 메모리는 더 쓴다.
function solution(numbers) {
    const C = +(numbers.shift());
    for(let i=0; i<C; i++){
        let count = 0;
        const scoreArr = numbers[i].split(' ').map(item=>+item) // 값들을 배열에 숫자로 담아준다
        // shift보다 splice를 사용했을때 더 빠르다
        scoreArr.splice(0, 1); // 첫 번째 값 제거
        const sum = scoreArr.reduce((acc, curr) => {
            return acc + curr;
        },0);
        const avg = sum / scoreArr.length;
        scoreArr.forEach(el => {
            if(el > avg){
                count++;
            } 
        })
        const result = ((count / scoreArr.length) * 100).toFixed(3);
        console.log(`${result}%`);;
    } 
}

// slice 로 첫 값을 뺀 새 배열을 만들어 봤는데 shift가 더 빠르다.
// slice 는 복사본 배열을 생성하기때문에 여기서 쓸 필요는 없다.
