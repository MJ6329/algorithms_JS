const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [num1, num2] = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((item) => Number(item));

console.log(solution(num1, num2));

// 수열을 만드는 함수
function NumberList(arrLength) {
    let arr = [];
    let num = 1;
    let count = 0;

    while (arr.length < arrLength) {
        arr.push(num);
        count++;
        if (num === count) {
            num++;
            count = 0;
        }
    }
    return arr;
}

function solution(startNum, lastNum) {
    const arr = NumberList(lastNum).slice(startNum - 1);
    const answer = arr.reduce((acc, cur) => (acc += cur), 0);
    return answer;
}
