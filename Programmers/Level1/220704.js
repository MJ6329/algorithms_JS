// const numbers = [1,2,3,4,6,7,8,0];
//result = 14

function solution(numbers) {
    var answer = -1;
    const array = [...new Array(10)].map((_,i) => i);
    const result = array.filter(item => !numbers.includes(item));
    answer = result.reduce((acc, curr) => {
        return acc + curr;
    },0);
    return answer;
}