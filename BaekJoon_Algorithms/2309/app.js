const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => +item);

solution(input);

function solution(fakeArray) {
    const fakeMensHeight = fakeArray.reduce((acc, cur) => acc + cur, 0) - 100;
    let isFind = false;
    let fakeMens = [];
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (fakeArray[i] + fakeArray[j] === fakeMensHeight) {
                fakeMens.push(fakeArray[i]);
                fakeMens.push(fakeArray[j]);
                isFind = true;
                break;
            }
        }
        if (isFind) {
            break;
        }
    }
    const result = fakeArray
        .filter((height) => !fakeMens.includes(height))
        .sort((a, b) => a - b);
    console.log(result.join("\n"));
}
