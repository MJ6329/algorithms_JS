const progresses = [95, 90, 99, 99, 80, 99]	;
const speeds = [1, 1, 1, 1, 1, 1];
// result = [1,3,2]

solution(progresses, speeds)

// level2는 아직 나에겐 어렵다 나중에 다시 도전.

function solution(progresses, speeds) {
    let answer = [];
    let complete = 1;
    let days = progresses.map((p, s) => Math.ceil(100-p) / speeds[s]);
    for(let i=0; i<days.length; i++){
        if(days[0] <= days[1]){
            answer.push(complete);
            days.shift(days[0]);
            console.log(days)
        }else {
            complete++;
            days.shift(days[1]); // shift는 맨 앞요소만 제거 할 수 있다는걸 잊고 있었다.
            console.log(days)
        }
    }
    console.log(answer)
       
}