const input = "{{1,2,3},{2,1},{1,2,4,3},{2}}"

solution(input)

function solution(s) {
    let answer = [];
    let list = s.replace(/\{{/gi,'').replace(/\}}/gi,'').split('},{');
    const newList = list.map(item => item.split(','))
    newList.sort((a,b) => a.length - b.length);
    answer.push(parseInt(newList[0][0]));
    for(let i=1; i<newList.length; i++){
        let item = newList[i].map(item => +item);
        let num =  item.filter(x => !answer.includes(x));
        answer.push(parseInt(num));
    } 
    console.log(answer);  
}