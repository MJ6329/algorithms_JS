const dartResult = '1S2D*3T';
// resutl = 37

solution(dartResult);

function solution(dartResult) {
    const dart = dartResult.match(/\d{1,2}[STD]{1}[*#]?/gi);
    const getScore = [];
    let answer = 0;
        for(let i = 0; i < dart.length; i++){
            const score = parseInt(dart[i].match(/\d{1,2}/g).join(''));
            const bonus = dart[i].match(/[[STD]{1}/g).join('');
            const option = dart[i].match(/[*#]?/g).join('');
            calculateBonus(bonus, score, getScore);
            if(option) calculateOption(option, getScore, i);
        }
        getScore.forEach(item => answer += item);
        console.log(answer);
    }


function calculateBonus (str, num, res) {
    switch (str){
        case 'S':
            res.push(Math.pow(num, 1));
            break;
        case 'D':
            res.push(Math.pow(num, 2));
            break;
        case 'T':
            res.push(Math.pow(num, 3));
            break;
    }
}

function calculateOption (op, res, idx){
    if(op === "#") res[idx] *= -1;
    if(op === "*") {
        res[idx] *= 2;
        if(idx !== 0) res[idx - 1] *= 2;
    }
}