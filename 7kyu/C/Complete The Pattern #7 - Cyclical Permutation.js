/*
Complete The Pattern #7 - Cyclical Permutation
https://www.codewars.com/kata/557592fcdfc2220bed000042/train/javascript

ask:
You have to write a function which creates the following pattern (See Examples) upto desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

Examples:
Argument: 9

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678
Argument: 11

1234567891011
2345678910111
3456789101112
4567891011123
5678910111234
6789101112345
7891011123456
8910111234567
9101112345678
1011123456789
1112345678910
Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line
*/

pattern=n=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+j)%n+1).join``).join`\n`

pattern=n=>Array.from({length:n},(_,i)=>[...Array(n)].map((_,j)=>(i+j)%n+1).join``).join`\n`

pattern=n=>n<1?"":(a=[...Array(n)]).map((_,i)=>a.map((_,j)=>(i+j)%n+1).join``).join`\n`

function pattern(n) {
  let string = ""
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        string += (i + j) % n + 1;
    }
    string +='\n'
  }
  return s.trim()
}
