const progresses = [99,99,98];
const speeds = [1, 1, 1];
// result = [1,3,2]

solution(progresses, speeds)

function solution(progresses, speeds) {
    let answer = [];
    let count = 1;
    let complete = progresses.map((item, idx) => Math.ceil((100-item) / speeds[idx]));
    let days = complete[0];
    for(let i=1; i<=complete.length; i++){
        if(days < complete[i]){
            answer.push(count);
            days = complete[i];
            count = 1;
        }else {
            count++;
        }
        if(i === complete.length-1) answer.push(count);
    }
    console.log(answer);
}