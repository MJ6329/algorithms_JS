const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(N) {
    let a = {};
    const num = +N[0];
    for(let i=1; i<=num; i++) {
        let [age, name] = N[i].split(' ');
        a[name] = +age;
    }
    let sortArr = Object.entries(a).sort((a,b) => a[1] - b[1]);
    for(let i=0; i<num; i++){
       let [name, age] = sortArr[i].join(' ').split(' ');
       console.log(age+' '+name)
    }
}