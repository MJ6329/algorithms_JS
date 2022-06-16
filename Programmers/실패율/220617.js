const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

// 간결하게 다시 짜 보았으나 시간이 어마어마하게 걸린다.

solution(N, stages);
function solution(N, stages){
    let player =  stages.length;
    let answer = [];
    let fail = {};
    for(let i=1; i<=N; i++){
        const nowStage = stages.filter(item => item === i).length;
        fail[i] = nowStage / player;
        player -= nowStage;
        }
    Object.entries(fail).sort((a,b) => b[1] - a[1]).map(([key]) => answer.push(+key));
    console.log(answer)
}