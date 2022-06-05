// const participant = ["mislav", "stanko", "mislav", "ana"];
// const completion = ["stanko", "ana", "mislav"];

solution(participant, completion)

function solution(participant, completion) {
    let answer = '';
    let members = {};
    for (let entry of participant){ 
        // for of 로 praticipant 배열의 요소를 하나씩 돌면서
        // members 객체로 넣어준다 이미 존재하면(동명이인) +1
        members[entry] = members[entry] ? members[entry] +1 :1 ;
    }
    for (let win of completion){
        // completion의 요소를 하나씩 돌면서 해당하는 사람의 숫자를 빼줌 
        members[win] -= 1;
    }
    
    for(let key in members){
        // 카운팅되어 있다면 완주하지 못 했단 뜻
        if(members[key] >= 1) answer += key;
    }
    console.log(answer);
}