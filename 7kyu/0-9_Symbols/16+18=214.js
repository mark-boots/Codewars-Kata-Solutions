/*
16+18=214
https://www.codewars.com/kata/5effa412233ac3002a9e471d

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

*/
function add(...nums) {
    let str = []
    let numA = nums.map((n)=>[...''+n].reverse());
    for(let i = 0; i<Math.max(...nums).toString().length; i++){
      str.push((parseInt(numA[0][i]) || 0) + (parseInt(numA[1][i]) || 0))
    }
    return parseInt(str.reverse().join(''))
  }