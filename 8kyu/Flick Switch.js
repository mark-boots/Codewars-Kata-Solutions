/*
Flick Switch
https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript

Task

Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.
Examples

['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes

    "flick" will always be given in lowercase.
    A list may contain multiple flicks.
    Switch the boolean value on the same element as the flick itself.
*/

function flickSwitch(arr){
    let r = true;
    const result = [];
    for(let i = 0; i < arr.length; i++){
        r = arr[i] !== 'flick' ??
        result.push(r);
    }
    return result
}
// or
flickSwitch=(a,r=true)=>a.map(v=>r=v=='flick'?!r:r)