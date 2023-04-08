/*
Set Reducer
https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript

Set Reducer
Intro

These arrays are too long! Let's reduce them!
Description

Write a function that takes in an array of integers from 0-9, and returns a new array:

    Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
    Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4

Example

[0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

When your function has reduced the array to a single integer following these rules, it should return that integer.

[2] => 2
Rules and assertions

    All test arrays will be 2+ in length
    All integers in the test arrays will be positive numbers from 0 - 9
    You should return an integer, not an array with 1 element

*/

function setReducer(input) {
    const reduced = input.reduce((arr, val, idx)=>{
        input[idx-1] == val ? ++arr[arr.length-1] : arr.push(1)
        return arr
    },[])
    
    return reduced.length > 1 ? setReducer(reduced) : reduced[0]
}

//or 
setReducer=x=>x.length==1?x[0]:setReducer(x.reduce((a,v,i)=>(x[i-1]==v?++a[a.length-1]:a.push(1),a),[]))