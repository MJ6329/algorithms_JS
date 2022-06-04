const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2
solution(id_list,report,k)
function solution(id_list, report, k) {
    let result = {}
    const newReport = [...new Set(report)];
    id_list.map(item => result[item] = [])
    report.map(item => {
        const [doReport, beReport] = item.split(' ');
        result[doReport].push(beReport)
    })
    for(const key in result){
        result[key].forEach(item => {
            console.log(item)
        });
   
    }
}
