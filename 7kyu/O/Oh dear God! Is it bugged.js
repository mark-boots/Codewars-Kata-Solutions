/*
Oh dear God! Is it bugged?
https://www.codewars.com/kata/580e67ae22e42d797000015e/train/javascript

Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 (it doesn't need to reflect an actual time) and false otherwise. But looks like he has messed it up. Could you help him out? Please!

*/

isItBugged=s=>/(\d\d-){2}\d{4} \d\d:\d\d/.test(s)