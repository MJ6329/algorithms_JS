const { count } = require("console");
const fs = require("fs");
const { isReadable } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((item) => +item);

const [minNum, maxNum] = input;

solution(minNum, maxNum);

function isPrimeNumber(num) {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        if (isPrimeNumber(i)) {
            arr.push(i);
        }
    }
    if (arr.length === 0) {
        console.log(-1);
    } else {
        const total = arr.reduce((acc, cur) => (acc += cur), 0);
        console.log(total);
        console.log(arr[0]);
    }
}
