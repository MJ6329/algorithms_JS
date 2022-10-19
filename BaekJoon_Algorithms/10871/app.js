const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(getNumbers(input));

function getNumbers([countNumbers, numberList]) {
    const [count, minNumber] = countNumbers.split(" ");
    return numberList
        .split(" ")
        .filter((number) => parseInt(number) < minNumber)
        .join(" ");
}