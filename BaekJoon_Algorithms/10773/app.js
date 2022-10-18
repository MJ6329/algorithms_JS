const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

console.log(solution(input));

function solution(numbers) {
    const [N, ...numberList] = numbers;
    const numberArray = [];
    numberList.forEach((number) => {
        if (number === 0) {
            numberArray.pop();
        }
        if (number) {
            numberArray.push(number);
        }
    });
    return numberArray.reduce((acc, cur) => acc + cur, 0);
}
