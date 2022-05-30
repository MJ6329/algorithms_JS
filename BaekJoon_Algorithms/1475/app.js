const fs = require('fs');
const { execPath } = require('process');
const { deflate } = require('zlib');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('').map(item=>+item);

solution(input);

function solution(N) {
    let nums = Array(9).fill(0);
    N.forEach(item => {
        if(item === 9) item = 6; //9도 6으로 카운트
        nums[item]++;
    })
    nums[6] = Math.ceil(nums[6]/2);
    count = Math.max(...nums);
    console.log(count);
}
