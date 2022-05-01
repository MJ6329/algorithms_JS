const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const score = parseInt(input[0]); 

if ((score % 4 === 0 && score % 100 !==0) || score % 400 === 0){
    console.log("1");
} else{
     console.log("0");
}
