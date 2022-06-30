
solution(5,[4,2],[3,5]);

function solution(n, lost, reserve) {
    let answer = 0;
    answer = n - lost.length;
    // 여분의 체육복이있는 사람도 도난을 당했을 수 있으니 중복을 처리해 준다.
    let intersection = lost.filter(x => reserve.includes(x)); //중복값
    let newLost = lost.filter(x => !intersection.includes(x)); // 중복값 제거
    let newReserve = reserve.filter(x => !intersection.includes(x)); // 중복값 제거
    answer += intersection.length;
    // input value가 전부 오름차순으로 들어있지 않다
    newLost.sort((a,b) => a-b); 
    newReserve.sort((a,b) => a-b);

    for(let i=0; i<newLost.length; i++){
        for(let j=0; j<newReserve.length; j++){
            if((newLost[i] - newReserve[j]) === 1 ||
            (newLost[i] - newReserve[j]) === -1){
                answer++
                newLost.shift();
                newReserve.shift();
                // 값을 없애버려서 index의 값이 하나씩 땡겨짐
                i--;
                j--;
                continue;
            }
        }
    }
    console.log(answer); 
}
