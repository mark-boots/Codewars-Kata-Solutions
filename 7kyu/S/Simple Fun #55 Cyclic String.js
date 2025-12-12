/*
Simple Fun #55: Cyclic String
https://www.codewars.com/kata/58899594b832f80348000122/train/javascript

Task
You're given a substring s of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

Example
For s = "cabca", the output should be 3

"cabca" is a substring of a cycle string "abcabcabcabc..." that can be obtained by concatenating "abc" to itself. Thus, the answer is 3.

Input/Output
[input] string s
Constraints: 3 ≤ s.length ≤ 15.

[output] an integer

*/
function cyclicString(s) {
  for (let k = 1; k <= s.length; k++) {
    const t = s.slice(0, k);
    if (t.repeat(Math.ceil(s.length / k)).includes(s)) return k;
  }
}

cyclicString=(s,i=1)=>s.startsWith(s.slice(i))?i:cyclicString(s,++i)