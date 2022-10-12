const { count } = require("console");
const fs = require("fs");
const { isReadable } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((item) => +item);

const [minNum, maxMun] = input;
let arr = [];

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

for (let i = minNum; i <= maxMun; i++) {
    if (isPrimeNumber(i)) {
        arr.push(i);
    }
}

function printResult(arr) {
    let total = 0;
    arr.forEach((item) => (total += item));
    console.log(total);
    console.log(arr[0]);
}

arr.length === 0 ? console.log(-1) : printResult(arr);

