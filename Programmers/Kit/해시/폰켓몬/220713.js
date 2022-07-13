const nums = [3,1,2,3];
// result = 2

function solution(nums) {
    let answer = 0;
    const max = nums.length/2;
    const monsterList = [...new Set(nums)];
    return answer = max < monsterList.length ? max : monsterList.length;
};