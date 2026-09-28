/*
Return pyramids
https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b/train/javascript

The task is very simple: you must return pyramids. Given a number n, you build a pyramid with n floors

For example , given a n=4 you must to print this pyramid:

   /\
  /  \
 /    \
/______\ 
Other example, given a n=6 you must to print this pyramid:

     /\
    /  \
   /    \
  /      \
 /        \
/__________\
Another example, given a n=10, you must to print this pyramid:

         /\
        /  \
       /    \
      /      \
     /        \
    /          \
   /            \
  /              \
 /                \
/__________________\
Note: a line feed character is needed at the end of the string.

*/
function pyramid(n) {
  const rows = [];
  for (let i = 0; i < n - 1; i++) {
    const row = Array(2 * n).fill(" ");
    row[n - 1 - i] = "/";
    row[n + i] = "\\";
    rows.push(row.join("").trimEnd());
  }
  rows.push("/" + "_".repeat(2 * n - 2) + "\\");
  return rows.join("\n") + "\n";
}
