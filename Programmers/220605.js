const progresses = [95, 90, 99, 99, 80, 99]	;
const speeds = [1, 1, 1, 1, 1, 1];
// result = [1,3,2]

solution(progresses, speeds)

// level2는 아직 나에겐 어렵다 나중에 다시 도전.
// 코드를 참고해서 작성했는데도 테스트2에서 실패가 뜬다 왤까?
function solution(progresses, speeds) {
    let answer = [];
    let complete = 0;
    let cnt = 1;
    let days = progresses.map((p, s) => Math.ceil(100-p) / speeds[s]);
    for(let i=1; i<days.length; i++){
        console.log(days[complete], days[i], days.length, i)
        if(days[complete] < days[i]){
            answer.push(cnt);
            complete += cnt;
            cnt = 1;
        }else {
            cnt++;
        }
        if(i === days.length-1) answer.push(cnt)
    }
    console.log(answer)
       
}