let notSelfNum = [] //셀프넘버가 아닌 값을 담아줄 배열 생성

function solution(num){
    let sum = num;
    while(num != 0){
    sum += num % 10; // 끝자리 수 를 하나 씩 구한다
    num = parseInt(num / 10); // 다음 값을 더해주기위해 끝 자리를 버리고 값을 업데이트
    }
    notSelfNum.push(sum);
}

for(let i=1; i<=10000; i++){
    solution(i);
    if(notSelfNum.includes(i) === false){
        console.log(i);
    }
}
//정수를 뽑을땐 parseInt
// includes는 배열에 있으면 true를 반환해줌 