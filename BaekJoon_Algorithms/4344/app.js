const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item);

const [testCaseCount, ...testCase] = input;

solution(testCaseCount, testCase);

function solution(loop, scores) {
    for (let i = 0; i < loop; i++) {
        const [scoreCount, ...scoreArr] = scores[i]
            .split(" ")
            .map((item) => +item);

        const avg = scoreArr.reduce((acc, curr) => acc + curr, 0) / scoreCount;
        const overAvgCount = scoreArr.filter((score) => score > avg).length;

        console.log(`${((overAvgCount / scoreCount) * 100).toFixed(3)}%`);
    }
}