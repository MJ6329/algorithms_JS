// 두 개 뽑아서 더하기
// numbers = [2,1,3,4,1]

console.log(solution(numbers))

function getSumArray(numbersArray) {
    const num = numbersArray.pop();
    return numbersArray.map((item) => num + item);
}

function solution(input) {
    const count = input.length;
    let result = [];
    for (let i = 1; i < count; i++) {
        result.push(...getSumArray(input));
    }
    result = [...new Set(result)].sort((a, b) => a - b);
    return result;
}