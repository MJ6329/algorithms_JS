// input
// s = "one4seveneight"
// result = 1478


function solution(s) {
    var answer = 0;
    
    s = s.replace(/zero/g, 0)
        .replace(/one/g, 1)
        .replace(/two/g ,2)
        .replace(/three/g, 3)
        .replace(/four/g, 4)
        .replace(/five/g, 5)
        .replace(/six/g, 6)
        .replace(/seven/g, 7)
        .replace(/eight/g, 8)
        .replace(/nine/g, 9);
    
    answer = +s
    return answer;
}

// 며칠 전 알게 된  정규식을 사용 해 보았다.