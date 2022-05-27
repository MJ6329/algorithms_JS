const input = [44, 1, 0, 0, 31, 25]		;
const winInput = [31, 10, 45, 1, 6, 19]		;
// result = [3, 5]

solution(input, winInput);

function solution(lottos, win_nums) {
    let answer = [];
    let zero = lottos.filter(item => item === 0);
    const minNum = win_nums.filter(item => lottos.includes(item));
    const highRanking = minNum.length + zero.length;
    if(minNum.length === 6) answer = [1,1];
    while(minNum.length !== 6){
        if(highRanking === 6) zero = -1;
        console.log(zero)
        answer.push(ranking(highRanking));
        answer.push(ranking(zero.length));
        break;
    }

    console.log(answer);
}

function ranking(value) {
    let result = '';
    switch(value){
        case 6:
            result = 1;
            break;
        case 5:
            result = 2;
            break;
        case 4:
            result = 3;
            break;
        case 3:
            result = 4;
            break;
        case 2:
            result = 5
            break;
        default:
            result = 6;
    }
        return result;
}