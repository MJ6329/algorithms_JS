// const n = 5;
// const arr1 = [9, 20, 28, 18, 11];
// const arr2 = [30, 1, 21, 17, 28];
// result = ["#####","# # #", "### #", "# ##", "#####"]

solution(n, arr1, arr2)

function solution(n, arr1, arr2){
    let answer = [];
    for(let i = 0; i<n; i++){
        let result = '';
        const map1 = arr1[i].toString(2).padStart(n, '0');
        const map2 = arr2[i].toString(2).padStart(n, '0');
        for(let j=0; j<n; j++){
            map1[j] === '1' || map2[j] === '1' ? result += '#' : result += ' ';
        }
        answer.push(result)
    }
    console.log(answer)
}