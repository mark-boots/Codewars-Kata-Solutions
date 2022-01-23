/*
Switcheroo
https://www.codewars.com/kata/57f759bb664021a30300007d

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/
const switcheroo = x => x.replace(/a/g,'_').replace(/b/g,'a').replace(/_/g,'b')

//

const switcheroo = x => x.replace(/[ab]/g, m => m == "a" ? "b" : "a")