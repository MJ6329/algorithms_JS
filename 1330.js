let fs = require('fs');
let [a,b] = fs.readFileSync('./dev/stdin').toString().split(' ').map(item=>+item);

if(a>b){
    console.log('>')
} else if(a<b){
    console.log('<')
} else{
    console.log('==')
}