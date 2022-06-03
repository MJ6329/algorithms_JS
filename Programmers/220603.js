const num = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const lf = "right";
// result = "LRLLLRLLRRL"

solution(num, lf)

function solution(numbers, hand) {
    let answer = '';
    const keypad = {
        1:[0,0], 2:[1,0], 3:[2,0],
        4:[0,1], 5:[1,1], 6:[2,1],
        7:[0,2], 8:[1,2], 9:[2,2],
        '*':[0,3], 0:[1,3], '#':[2,3],
    }
    let nowLeft = '*';
    let nowRight = '#';
    const whichHand = hand === 'left' ? 'L' : 'R';
    numbers.forEach(item => {
        if(item === 1 || item === 4 || item === 7) {
            nowLeft = item;
            answer += 'L';
        } 
        if(item === 3 || item === 6 || item === 9) {
            nowRight = item;
            answer += 'R';
        }
        if(item === 2 || item === 5 || item === 8 || item === 0){
            console.log('num: ', item ,'now: ',nowLeft, nowRight)
            let leftDistance = Math.abs((keypad[nowLeft][0] - keypad[item][0])) + Math.abs((keypad[nowLeft][1] - keypad[item][1]));
            let rightDistance = Math.abs((keypad[nowRight][0] - keypad[item][0])) + Math.abs((keypad[nowRight][1] - keypad[item][1]));
            if(leftDistance < rightDistance) {
                nowLeft = item;
                answer += 'L';
            }
            if(leftDistance > rightDistance) {
                nowRight = item;
                answer += 'R';
            }
            if(leftDistance === rightDistance){
                hand === 'left' ? nowLeft = item : nowRight = item;
                answer += whichHand;
            }
        }
        
    })
    
    console.log(answer);
}