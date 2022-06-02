// const N = 5;
// const stages = [2, 1, 2, 6, 2, 4, 3, 3];

// 코드짤때 입력값에 맞는 값을 넣어서 자꾸 실패
// 마지막스테이지 클리어 사용자가 여러명일때를 생각 못함.

solution(N, stages);
function solution(N, stages){
    let answer = [];
    let result = {};
    let totalPlayer = stages.length;
    let stagesCnt = 0;
    let playerCnt = 0;
    const sortArr = stages.sort((a,b) => a-b);
    const maxStage = stages.find(item =>  item === N+1)

    if(maxStage) sortArr.splice(sortArr.indexOf(maxStage),);
    if(!maxStage) result[N] = 0;
    for(let i=0; i<stages.length; i++){
        stagesCnt++;
        playerCnt++;
        if(sortArr[i] === N+1) {
            const maxStageClear = sortArr.pop(sortArr[i])
            result[maxStageClear-1] = 0;
        }
        if(sortArr[i] !== sortArr[i+1]){
            let fail = stagesCnt/(totalPlayer);
            result[sortArr[i]] = fail;
            totalPlayer -= playerCnt;
            stagesCnt = 0;
            playerCnt = 0;
        }
    }
    if(answer.length < N){
        const totalStages = [...new Array(N)].map((_,i) => i +1);
        const failStages = Object.keys(result).map(item=>+item);
        const clearStages = totalStages.filter(item => !failStages.includes(item));
        clearStages.forEach(item => {
            result[item] = 0;
        })
    }
    Object.entries(result).sort((a,b)=> b[1]-a[1]).forEach(([key]) => {
        answer.push(+key);
    })

    console.log(answer);
}