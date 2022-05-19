// input = "...!@BaT#*..y.abcdefghijklm"	
// result = "bat.y.abcdefghi"

function solution(new_id) {
    let answer = ''
    answer = new_id.toLowerCase()
            .replace(/[^\w\.\_\-]/g,'')
            .replace(/[\.]{2,}/g,'.') //.replace(/\.+/g,'.')
            .replace(/^\./,'')
            .replace(/\.$/,''); 
    
    if(!answer) answer = 'a';
    if(answer.length >= 16) answer = answer.slice(0,15).replace(/\.$/,'');
    while(answer.length < 3){
        answer += answer[answer.length - 1];
    }
    return answer;
}