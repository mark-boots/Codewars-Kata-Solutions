//[7 kyu] Looking for a benefactor
function newAvg(arr, newavg) {
    let goal = (arr.length + 1) * newavg;
    let curr = arr.reduce((sum,val) => sum + val, 0);
    let diff = Math.ceil(goal - curr);
    
    if(diff <= 0) throw 'ValueError';
    return diff;
}