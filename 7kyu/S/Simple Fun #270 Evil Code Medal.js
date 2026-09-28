/*
Simple Fun #270: Evil Code Medal
https://www.codewars.com/kata/5915686ed2563aa6650000ab/train/javascript

Task
EvilCode is a game similar to Codewars. You have to solve programming tasks as quickly as possible. However, unlike Codewars, EvilCode awards you with a medal, depending on the time you took to solve the task.

To get a medal, your time must be (strictly) inferior to the time corresponding to the medal. You can be awarded "Gold", "Silver" or "Bronze" medal, or "None" medal at all. Only one medal (the best achieved) is awarded.

You are given the time achieved for the task and the time corresponding to each medal. Your task is to return the awarded medal.

Each time is given in the format HH:MM:SS.

Input/Output
[input] string userTime

The time the user achieved.

[input] string gold

The time corresponding to the gold medal.

[input] string silver

The time corresponding to the silver medal.

[input] string bronze

The time corresponding to the bronze medal.

It is guaranteed that gold < silver < bronze.

[output] a string

The medal awarded, one of for options: "Gold", "Silver", "Bronze" or "None".

Example
userTime = "00:30:00"
gold = "00:15:00"
silver = "00:45:00" 
bronze = "01:15:00"

the output should be "Silver"
userTime = "01:15:00"
gold = "00:15:00"
silver = "00:45:00" 
bronze = "01:15:00"

the output should be "None"

*/

evilCodeMedal=(...a)=>([u,g,s,b]=a.map(t=>t.split`:`.reduce((x,v,i)=>x+v*60**(2-i),0)),u<g?'Gold':u<s?'Silver':u<b?'Bronze':'None')

evilCodeMedal=(u,g,s,b)=>u<g?'Gold':u<s?'Silver':u<b?'Bronze':'None'