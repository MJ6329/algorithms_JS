let fs = require('fs');
let [a,b] = fs.readFileSync('./dev/stdin').toString().split(' ').map(v=>parseInt(v));

if(a>b){
    console.log('>');
} else if(a<b){
    console.log('<');
} else{
    console.log('==');
}