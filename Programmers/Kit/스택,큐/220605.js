const progresses = [99,99,98];
const speeds = [1, 1, 1];
// result = [1,3,2]

solution(progresses, speeds)

// 코드를 참고해서 작성했는데도 테스트2에서 실패가 뜬다 왤까?
// Math.ceil(100-p) / speeds[s]); => Math.ceil((100-p) / speeds[s])); 괄호를 하나 빼 먹었다..
// 멍청한 실수 였음 

function solution(progresses, speeds) {
    let answer = [];
    let complete = 0;
    let cnt = 1;
    let days = progresses.map((p, s) => Math.ceil((100-p) / speeds[s]));
    for(let i=1; i<days.length; i++){
        console.log(days[complete], days[i], days.length, i)
        if(days[complete] < days[i]){
            answer.push(cnt);
            console.log('com+cnt', cnt)
            complete += cnt;
            console.log(complete)
            cnt = 1;
            console.log('resetcnt', cnt)
        }else {
            cnt++;
        }
        if(i === days.length-1) answer.push(cnt)
    }
    console.log(answer)
       
}