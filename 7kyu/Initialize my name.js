/*
Initialize my name
https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript

Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/

function initializeNames(n) {
  const ns = n.split(" ");
  if (ns.length <= 2) {
    return n;
  } else {
    const fn = ns[0];
    const ln = ns.at(-1);
    const mns = ns.slice(1, -1).map(n => `${n[0]}.`);
    return `${fn} ${mns.join(" ")} ${ln}`;
  }
}

//

const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.')