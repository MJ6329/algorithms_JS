const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((item) => item);

const [num, ...arr] = input;

solution(num, arr);

function solution(N, A) {
    for (let i = 0; i < parseInt(N); i++) {
        console.log(A[i].split(" ").map((item) => parseInt(item)).sort((a,b)=> b-a)[2]);
    }
}