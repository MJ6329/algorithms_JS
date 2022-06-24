const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

solution(participant, completion)

// for문 으로 돌리는게 더 빨랐다.
function solution(participant, completion) {
    let answer = ''
    let members = {};
    for(let i=0; i<participant.length; i++){
       members[participant[i]] = members[participant[i]] ? members[participant[i]] += 1 : 1    
    }
    for(let i=0; i<completion.length; i++){
        members[completion[i]] -= 1;
    }
    answer = Object.keys(members).find(key => members[key] >= 1);

    return answer;
}

// function solution(participant, completion) {
//     let answer = '';
//     let members = {};
//     for (let entry of participant){ 
//         // for of 로 praticipant 배열의 요소를 하나씩 돌면서
//         // members 객체로 넣어준다 이미 존재하면(동명이인) +1
//         members[entry] = members[entry] ? members[entry] +1 :1 ;
//     }
//     for (let win of completion){
//         // completion의 요소를 하나씩 돌면서 해당하는 사람의 숫자를 빼줌 
//         members[win] -= 1;
//     }
    
//     answer = Object.keys(members).find(key => members[key] >= 1);
    
//     /* 기존 코드
//     for(let key in members){
//         // 카운팅되어 있다면 완주하지 못 했단 뜻
//         if(members[key] >= 1) answer += key;
//     }
//     */
// }

