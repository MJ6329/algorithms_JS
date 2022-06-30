// input = "...!@BaT#*..y.abcdefghijklm"	
// result = "bat.y.abcdefghi"

function solution(new_id) {
    let answer = ''
    answer = new_id.toLowerCase()
            .replace(/[^\w\.\_\-]/g,'')
            .replace(/[\.]{2,}/g,'.') //.replace(/\.+/g,'.')
            // 아래 두 코드를 한 줄로 처음에 이렇게 시도해 보았었는데 . 앞에 \를 붙여줘야 했던걸 그 때는 몰랐어서 오류가 났었다.
            .replace(/^\.|\.$/,''); 
            // .replace(/^\./,'')
            // .replace(/\.$/,''); 
    
    if(!answer) answer = 'a';
    if(answer.length >= 16) answer = answer.slice(0,15).replace(/\.$/,'');
    while(answer.length < 3){
        answer += answer[answer.length - 1];
    }
    
    return answer;
}
/* repeat을 쓰고 싶었는데 while문 안에서 쓰다가 무한루프만 걸려 못 썼고 다른사람의 풀이를 참고했다.
    하지만 좋은 코드는 아닌 것 같다.
while(answer.length < 3){
    answer += answer[answer.length - 1].repeat(1);
} */
// 참고 코드
// const len = answer.length;
// return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);