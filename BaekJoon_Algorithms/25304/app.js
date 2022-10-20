const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(solution(input));

function solution(input) {
    const [receipt, totalCount, ...goods] = input;
    let totalPrice = 0;
    for (let i = 0; i < totalCount; i++) {
        const [goodsPrice, goodsCount] = goods[i].split(" ");
        totalPrice += parseInt(goodsPrice) * parseInt(goodsCount);
    }
    return parseInt(receipt) === totalPrice ? "Yes" : "No";
}