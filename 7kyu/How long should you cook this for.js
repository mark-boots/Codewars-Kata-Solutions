/*
How long should you cook this for?
https://www.codewars.com/kata/5aefd0a686d075d5f3000091

You've purchased a ready-meal from the supermarket.

The packaging says that you should microwave it for 4 minutes and 20 seconds, based on a 600W microwave.

Oh no, your microwave is 800W! How long should you cook this for?!

Input
You'll be given 4 arguments:

1. needed power
The power of the needed microwave.
Example: "600W"

2. minutes
The number of minutes shown on the package.
Example: 4

3. seconds
The number of seconds shown on the package.
Example: 20

4. power
The power of your microwave.
Example: "800W"

Output
The amount of time you should cook the meal for formatted as a string.
Example: "3 minutes 15 seconds"

Note: the result should be rounded up.

59.2 sec  -->  60 sec  -->  return "1 minutes 0 seconds"

*/

function cookingTime(neededPower, minutes, seconds, power) {
    const time = Math.ceil((seconds + minutes*60) / parseInt(power) * parseInt(neededPower));
    return `${Math.floor(time / 60)} minutes ${time % 60} seconds`
}
//cookingTime=(n,m,s,p,t=Math.ceil((s+m*60)/parseInt(p)*parseInt(n)))=>`${t/60|0} minutes ${t%60} seconds`
