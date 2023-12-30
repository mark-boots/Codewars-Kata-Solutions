/*
Find the volume of a Cone.
https://www.codewars.com/kata/57b2e428d24156b312000114

Find the volume of a cone whose radius and height are provided as parameters to the function volume. Use the value of PI provided by your language (for example: Math.PI in JS, math.pi in Python or Math::PI in Ruby) and round down the volume to an Interger.

If you complete this kata and there are no issues, please remember to give it a ready vote and a difficulty rating. :)

*/

function volume(r,h) {
    return Math.floor(Math.PI * (r**2) * (h/3))
}

// volume=(r,h)=>Math.PI*r*r*h/3|0