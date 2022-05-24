
solution(7,[1,3,4,6],[3,4,5]);

function solution(n, lost, reserve) {
    let answer = 0;
    answer = n - lost.length;
    for(let i=0; i<lost.length; i++){
        for(let j=0; j<reserve.length; j++){
            if(lost[i] === reserve[j]){
                lost.splice(i, 1);
                reserve.splice(j, 1);
                i = i-1;
                answer++;
            }
            for(let i=0; i<lost.length; i++){
                for(let j=0; j<reserve.length; j++){
                    if((lost[i] - reserve[j]) === 1 ||
                        (lost[i] - reserve[j]) === -1 ||
                        (lost[i] - reserve[j]) === 0 ){
                        answer++
                        lost.shift();
                        reserve.shift();
                    }
                }
            }
        }
    
    }
    console.log(answer);
  }