const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2

solution(id_list,report,k)

function solution(id_list, report, k) {
    let getMail = Array(id_list.length).fill(0);
    let result = {};
    const newReport = [...new Set(report)]; // 중복 신고건을 걸러준다 (중복제거)
    id_list.map(item => result[item] = []) // 신고한 user를 value로 가질 빈 배열을 가진 객체 생성
    newReport.map(item => {
        const [doReport, beReport] = item.split(' '); // 신고자와 신고당한 사람을 나누어서 넣어준다
        result[beReport].push(doReport)
    })
    for(const key in result){
        if(result[key].length >= k){ // 신고자가 k명 이상이면 정지대상
            result[key].map(item => {
                getMail[id_list.indexOf(item)]++; //value를 각각돌면서 메일 발송할 사람을 카운트 해준다.
            })
        }
    }
    console.log(getMail);
}
