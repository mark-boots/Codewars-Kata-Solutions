/*
Simple Fun #4: Phone Call
https://www.codewars.com/kata/588425ee4e8efb583d000088/train/javascript

*/
function phoneCall(min1, min2_10, min11, s) {
  if (s <= min1) return s * 60;
  if (s <= 10) return min1 * 60 + (s - 1) * min2_10 * 60;
  return min1 * 60 + 9 * min2_10 * 60 + (s - 10) * min11 * 60;
}


phoneCall=(a,b,c,s)=>s<a?0:s<a+9*b?1+~~((s-a)/b):10+~~((s-a-9*b)/c)
