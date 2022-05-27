// const input = [0, 0, 0, 0, 0, 0];
// const winInput = [1,2,3,4,5,6];
// result = [1, 6]

function solution(lottos, win_nums) {
    let answer = [];
    const allZero = lottos.every(item => item === 0); //전부 0인지 확인
    const minNum = win_nums.filter(item => lottos.includes(item)).length; // 당첨확정 번호
    const zero = lottos.filter(item => item === 0).length; // 0이 담긴 배열
    const highRanking = minNum + zero; // 최고당첨갯수
    if (allZero) { // 전부 0이면 전부 맞거나 전부 틀리거나
        answer = [1,6];
    } else if(minNum === 6) { // 당첨확정 번호가 6개면 1등
        answer = [1,1];
    } else if(minNum === 0 && zero === 0) { // 당첨확정번호도 0도 없으면 낙첨확정
        answer = [6,6];
    } else{
        answer.push(ranking(highRanking));
        answer.push(ranking(minNum)); 
        // minNum값을 넣어줘야하는데 zero값을 넣어놔서 테스트케이스 돌리면 자꾸 실패 했다
    }
    return answer;
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
