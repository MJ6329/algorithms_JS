const fs = require("fs");
const { deflate } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);

function solution(numberList) {
    switch (numberList.join("")) {
        case "12345678":
            console.log("ascending");
            break;
        case "87654321":
            console.log("descending");
            break;
        default:
            console.log("mixed");
            break;
    }
}
