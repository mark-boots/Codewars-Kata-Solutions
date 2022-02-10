/*
Form The Largest
https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e

Task

Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
Notes

    Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive

    Digit Duplications could occur , So also consider it when forming the Largest

Input >> Output Examples:

maxNumber (213) ==> return (321)

Explanation:

As 321 is _The Maximum number _ could be formed from the digits of the number 213 .

maxNumber (7389) ==> return (9873)

Explanation:

As 9873 is _The Maximum number _ could be formed from the digits of the number 7389 .

maxNumber (63729) ==> return (97632)

Explanation:

As 97632 is _The Maximum number _ could be formed from the digits of the number 63729 .

maxNumber (566797) ==> return (977665)

Explanation:

As 977665 is _The Maximum number _ could be formed from the digits of the number 566797 .

Note : Digit duplications are considered when forming the largest .

maxNumber (17693284) ==> return (98764321)

Explanation:

As 98764321 is _The Maximum number _ could be formed from the digits of the number 17693284 .
*/

const maxNumber = n => +[...n+''].sort((a,b)=>b-a).join``
