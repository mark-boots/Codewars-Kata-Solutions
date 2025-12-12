/*
Get key/value pairs as arrays
https://www.codewars.com/kata/515dfd2f1db09667a0000003/train/javascript

omplete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?
*/

// keysAndValues=d=>Object.entries(d).reduce((a,[k,v])=>(a[0].push(k),a[1].push(v),a),[[],[]])

keysAndValues=d=>[Object.keys(d),Object.values(d)]