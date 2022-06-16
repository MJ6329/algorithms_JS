const N = 5;
const stages = [1,1,1,1,2,6];

// 마지막스테이지 클리어 사용자가 여러명일때를 생각 못함.

solution(N, stages);
function solution(N, stages){
    let answer = [];
    let result = {};
    let totalPlayer = stages.length;
    let stagesCnt = 0;
    const sortArr = stages.sort((a,b) => a-b);
    const count = Object.keys(result).length
    const maxStage = stages.find(item =>  item === N+1)
    if(maxStage) {
        result[maxStage-1]=0;
        //result[N-1]=0; 리팩토링하다가 이 부분을 착각해서 26번만 자꾸 오류가 났었다.
        sortArr.splice(sortArr.indexOf(maxStage),);
    }
    for(let i=0; i<sortArr.length; i++){
        stagesCnt++;
        if(sortArr[i] !== sortArr[i+1]){
            let fail = stagesCnt/(totalPlayer);
            result[sortArr[i]] = fail;
            totalPlayer -= stagesCnt; 
            stagesCnt = 0;
        }
    }

    if(count < N){
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

    return answer;
}