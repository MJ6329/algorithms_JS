const arr = [4, 4, 4, 3];

console.log(solution(arr));

function solution(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (answer.length === 0) {
            answer.push(arr[i]);
        }
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}
