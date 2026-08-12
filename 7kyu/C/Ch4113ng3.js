/*
Ch4113ng3
https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

*/
nerdify=t=>[...t].map(c=>({a:4,A:4,e:3,E:3,l:1}[c]||c)).join``