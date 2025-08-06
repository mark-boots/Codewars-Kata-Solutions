/*
Numbers in different systems
https://www.codewars.com/kata/588bb1195eb601f5d400001f/train/javascript

Translate number to the selected number system. If the number consists just of digits - return number, else - return string.

  SysNums(5,2) // 101
  SysNums(5,8) // 5
  SysNums(250,2) // 11111010
  SysNums(250,16) // "fa"
#####Hint: System can be 2, 8, 10, 16.

*/
function sysNums(n, sys) {
  const str = n.toString(sys);
  return /^\d+$/.test(str) ? +str : str;
}