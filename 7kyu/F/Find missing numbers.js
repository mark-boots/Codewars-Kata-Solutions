/*
Find missing numbers
https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb

You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]

*/

function findMissingNumbers(arr){
    const r = [];
    for(let i = Math.min(...arr); i < Math.max(...arr); i++){
        if(!arr.includes(i)) r.push(i);
    }
    return r;
}

// findMissingNumbers=a=>Array.from({length:a.at(-1)-a[0]},(_,i)=>i+a[0]).filter(v=>!a.includes(v))