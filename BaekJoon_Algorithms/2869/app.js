const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((item) => +item);

const [up, down, goal] = input;

console.log(solution(up, down, goal));

function solution(climb, slip, woodenStick) {
    return Math.ceil((woodenStick - slip) / (climb - slip));
}