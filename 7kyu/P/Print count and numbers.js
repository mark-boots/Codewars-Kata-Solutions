/*
Print count and numbers
https://www.codewars.com/kata/559af787b4b8eac78b000022/train/javascript
Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

Example: "1123"

Here 1 comes twice so <count><integer> will be "21"
then 2 comes once so <count><integer> will be "12"
then 3 comes once so <count><integer> will be "13"
hence output string will be "211213".

Similarly "211213" will return "1221121113" (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings
*/
countMe=d=>!/\D/g.test(d)?d.replace(/(\d)\1*/g,m=>m.length+m[0]):''