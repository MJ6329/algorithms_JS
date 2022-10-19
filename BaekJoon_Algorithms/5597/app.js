const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

const answer = Array.from({ length: 30 }, (v, i) => i + 1)
    .filter((number) => !input.includes(number))
    .join("\n");

console.log(answer);