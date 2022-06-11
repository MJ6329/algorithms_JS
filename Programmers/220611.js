let dartResult = '10S*2D*3T#';

let dart = dartResult.match(/\d{1,2}[STD]{1}[*#]?/gi);
let result = [];
let answer = 0;
for(let i=0; i<dart.length; i++){
    let score = dart[i].match(/\d{1,2}/g).join('')
    let bonus = dart[i].match(/[[STD]{1}/g).join('')
    let option = dart[i].match(/[*#]?/g).join('');
    if(bonus === 'S') result.push(score ** 1);
    if(bonus === 'D') result.push(score ** 2)
    if(bonus === 'T') result.push(score ** 3)
    if(option === '#') {
        result[i] *= -1
    }
    if(option === '*') {
        result[i] *= 2
        if(i !== 0) result[i - 1] *= 2
    }
}
result.forEach(item => answer += item);
console.log(answer)