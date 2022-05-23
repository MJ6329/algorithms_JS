/* input
array = [1, 5, 2, 6, 3, 7, 4]	
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	
return = [5, 6, 3]
*/

function solution(array, commands) {
    let answer = [];
    for(let i=0; i<commands.length; i++){
        let start = commands[i][0]-1;
        let end = commands[i][1];
        let idx = commands[i][2]-1;
        const newArr = array.slice(start, end).sort((a,b) => a - b);
        // 테스트2에서 자꾸 오류가 났다 sort()만 해 주었기 때문
        // [1, 2, 1000, 3] => [1, 1000, 2, 3] 으로 정렬이 되어버린다.
        answer.push(newArr[idx]);
    }
    return answer;
}