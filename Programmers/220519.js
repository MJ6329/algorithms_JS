// 두 개 뽑아서 더하기
// numbers = [2,1,3,4,1]
// answer = [,3,4,5,6,7]

function solution(numbers) {
    var answer = [];
    const newArr = [];
    // numbers = [2,1,3,4,1]
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            newArr.push(numbers[i] + numbers[j]);
        }
    }
    answer = [...new Set(newArr)];
    answer.sort((a, b) => a - b);
    return answer;
}