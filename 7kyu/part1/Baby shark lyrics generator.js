/*
Baby shark lyrics generator
https://www.codewars.com/kata/5d076515e102162ac0dc514e;

Baby Shark Lyrics

baby shark

Create a function, as short as possible, that returns this lyrics.
Your code should be less than 300 characters. Watch out for the three points at the end of the song.

Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark!
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark!
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark!
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark!
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark!
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt!
Run away,…
*/

s=' shark'
l=['Baby'+s,'Mommy'+s,'Daddy'+s,'Grandma'+s,'Grandpa'+s,'Let\'s go hunt']
babySharkLyrics=()=>l.map(x=>(`${x},${' doo'.repeat(6)}\n`).repeat(3)+`${x}!\n`).join``+'Run away,…'

//one line
babySharkLyrics=(S=' shark')=>['Baby'+S,'Mommy'+S,'Daddy'+S,'Grandma'+S,'Grandpa'+S,'Let\'s go hunt'].map(x=>(`${x},${' doo'.repeat(6)}\n`).repeat(3)+`${x}!\n`).join``+'Run away,…'
