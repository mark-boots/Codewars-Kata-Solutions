/*
Time Converter: hours, minutes, seconds and milliseconds
https://www.codewars.com/kata/56b8b0ae1d36bb86b2000eaa

Given a time in a time format class, return it without year, month and day.

It should return a string including milliseconds with 3 decimals.

Example:

new Date(2016, 2, 8, 16, 42, 59)
//Should return: 
"16:42:59,000"

*/
convert=t=>t.toLocaleTimeString()+','+(''+t.getMilliseconds()).padStart(3,0)
convert=t=>t.toISOString().slice(11,23).replace(`.`, `,`)
convert=t=>t.toJSON().replace(/.*T(.*)\.(.*)Z/,'$1,$2')