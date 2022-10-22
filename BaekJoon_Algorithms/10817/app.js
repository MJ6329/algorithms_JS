const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((item) => parseInt(item));

console.log(solution(input));

function solution(numberArray) {
    return numberArray.sort((a, b) => a - b)[1];
}
