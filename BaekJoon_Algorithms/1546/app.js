const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(getFakeAverage(input));

function getFakeAverage([N, S]) {
    const num = Number(N);
    const scores = S.split(" ").map((score) => Number(score));
    const maxScore = Math.max(...scores);

    return (
        scores
            .map((newScore) => (newScore / maxScore) * 100)
            .reduce((acc, cur) => acc + cur, 0) / num
    );
}