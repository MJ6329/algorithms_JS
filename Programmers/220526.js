/*
board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2]
    [3,5,1,3,1]
]
moves = [1,5,3,5,1,2,1,4]
         4,3,1,1,3,2,-,4 = result = 4
*/

function solution(board, moves) {
    let answer = 0;
    let basket = [];
    moves.forEach((position)=>{
        for(let i=0; i<board.length; i++){
            let doll = board[i][position-1];
            if(doll === 0) continue;
            board[i][position-1] = 0; // 뽑은 자리를 0으로 만들어준다
            basket.push(doll);
            if(doll ===  basket[basket.length-2]){
                basket.pop(doll);
                basket.pop();
                answer += 2;
            }
            break; //다음 크레인 실행
        }
    })
    return answer;
}

// basket[basket.length-2] 를 basket.length-2 라고 적고 현재 케이스에선 답이 같은데 자꾸 실수를 해서 애를 먹었다.

/* 값을 넣기전에 처리하는 방법도 있었다.
if(doll === basket[basket.length-1]){
    basket.pop();
    answer +=2;
} else {
    basket.push(doll);
}
*/