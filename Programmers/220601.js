const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
// result = [3,4,2,1,5]

solution(N, stages);
function solution(N, stages){
    let answer = [];
    let result = {};
    let totalPeople = stages.length;
    let stagesCnt = 0;
    let peopleCnt = 0;
    const sortArr = stages.sort((a,b) => a-b);
    for(let i=0; i<stages.length; i++){
        stagesCnt++;
        peopleCnt++;
        if(sortArr[i] === N+1) sortArr[i] = N;
        if(sortArr[i] !== sortArr[i+1]){
            let fail = stagesCnt/(totalPeople - peopleCnt);
            if(fail === Infinity) fail = 0;
            result[sortArr[i]] = fail;
            totalPeople -= peopleCnt;
            stagesCnt = 0;
            peopleCnt = 0;
        }
    }
    result = Object.entries(result).sort((a,b) => {
        return b[1] - a[1];
    });
    console.log(result)
    // console.log(answer);
}