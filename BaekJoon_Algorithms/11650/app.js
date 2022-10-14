const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(arr) {
    const [count, ...numbers] = arr;
    const newArray = numbers.map((num) =>
        num.split(" ").map((num) => parseInt(num))
    );
    const result = newArray.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    let answer = "";

    result.forEach((item) => (answer += `${item.join(" ")}\n`));
    console.log(answer);
}
