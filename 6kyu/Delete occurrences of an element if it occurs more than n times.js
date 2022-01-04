//[6 kyu] Delete occurrences of an element if it occurs more than n times
function deleteNth(arr,n){
    let res = [];
    for(let i = 0; i<arr.length; i++){
      if(res.filter(nr => nr == arr[i]).length < n) res.push(arr[i])
    }
    return res
  }
  