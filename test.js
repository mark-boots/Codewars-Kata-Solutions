const list = [1,5,4,6,3,2]
const result = list.reduce( (arr,val,idx) => {
    arr[idx%2] += val
    return arr
}, [0,0])

console.log(result) //expected [8,13]