// const N = 5;
// const stages = [4,4,4,4,4]	;
const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
// result = [3,4,2,1,5]

// 코드 간결하게...
// 예외처리 다시 생각해보기

solution(N, stages);
function solution(N, stages){
    let answer = [];
    let result = {};
    let totalPlayer = stages.length;
    let stagesCnt = 0;
    let playerCnt = 0;
    const sortArr = stages.sort((a,b) => a-b);
    const maxStage = stages.find(item =>  item === N+1)
    if(!maxStage) result[N] = 0;
    for(let i=0; i<stages.length; i++){
        stagesCnt++;
        playerCnt++;
        if(sortArr[i] === N+1) {
            const maxStageClear = sortArr.pop(sortArr[i])
            result[maxStageClear-1] = 0;
        }
        if(sortArr[i+1] - sortArr[i] >= 2 || sortArr[i+1] === undefined) {
            clearStage = sortArr[i]+1;
            while(clearStage < N || clearStage < sortArr[i+1]){
                result[clearStage] = 0;
                clearStage++;
            }
        }
        if(sortArr[i] !== sortArr[i+1]){
            let fail = stagesCnt/(totalPlayer);
            result[sortArr[i]] = fail;
            totalPlayer -= playerCnt;
            stagesCnt = 0;
            playerCnt = 0;
        }
    }

    Object.entries(result).sort((a,b)=> b[1]-a[1]).forEach(([key]) => {
        answer.push(+key);
    })

    if(answer.length < N){
        const totalStages = [...new Array(N)].map((_,i) => i +1);
        const clearStages = totalStages.filter(item => !answer.includes(item));
        answer = answer.concat(clearStages);
    }
    console.log(answer);
}