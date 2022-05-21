// const participant = ["mislav", "stanko", "mislav", "ana"];
// const completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
     answer = '';
    participant.sort();
    completion.sort();
    for(let i=0; i<participant.length; i++){
            if(participant[i] !== completion[i]){ //정렬을 했기 때문에 하나씩 비교해서 다르면 answer에 넣어줌
                answer = participant[i];
                break;
                // break를 주지 않으면 그 다음값 부터도 서로 값이 달라지기 때문에 끝내줘야 함
                // 바로 return answer을 해줘도 된다
                // participant 와 completion의 길이가 1 밖에 차이가 안나서 가능
        }
    }
    return answer;
}