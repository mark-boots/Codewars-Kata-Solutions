/*
Save the submarine
https://www.codewars.com/kata/64de4832c734e7036b455536/train/javascript

[
  ['~','~','~','~','~',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['ˑ','(','O',')','ˑ',], // <- A submarine size 3 at a depth of 2
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
]
Task
You will be given a locator signal, your task is to give tasks for the search boat.

Output
"Look for a submarine on the surface" - if the submarine is intact, I am on the surface of the water
[
  ['~','(','O',')','~',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
]
"Start searching for a submarine at 'n' depth" - if the submarine is intact and underwater
[
  ['~','~','~','~','~',],
  ['ˑ','(','O',')','ˑ',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
] // Response - 'Start searching for a submarine at 1 depth'
"Emergency search for a possibly damaged submarine at 'n' depth" - if the depth is too deep for this submarine and the submarine is intact (submarine length < depth)
[
  ['~','~','~','~','~',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['ˑ','(','O',')','ˑ',],
] //Response - 'Emergency search for a possibly damaged submarine at 4 depth'
"Emergency assistance to victims" - if the boat is destroyed
[
  ['~','~','~','~','~',],
  ['(','O','ˑ','ˑ',')',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
]
Submarine size and maximum depth
The size of a submarine is its length. For example:

[
  ['~','~','~','~','~',],
  ['ˑ','(','O',')','ˑ',], // <- A submarine size 3 
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
]

[
  ['~','~','~','~','~',],
  ['(','O','O','O',')',], // <- A submarine size 5 
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
]
The maximum depth is submarine size. Submarine size = maximum depth. For example:

[
  ['~','~','~','~','~',],
  ['ˑ','(','O',')','ˑ',], // <- A submarine size 3 long can only safely dive up to 3 depth
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
]

[
  ['~','~','~','~','~',],
  ['(','O','O','O',')',], // <- A submarine size 5 long can only safely dive up to 5 depth
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
]

[
  ['~','~','~','~','~',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['ˑ','(','O',')','ˑ',], // <- Dangerous depth for such a small submarine
]

// A whole submarine at a dangerous depth should be considered whole
Destroyed submarines examples
[
  ['~','~','~','~','~',],
  ['(','O','ˑ','ˑ',')',], // <- Destroyed submarine
]

[
  ['~','(','~',')','~',], // <- Destroyed submarine
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],  
]

[
  ['~','~','~','~','~',],
  ['ˑ','(','ˑ','ˑ',')',], // <- Destroyed submarine
]

[
  ['~','~','~','~','~',],
  ['ˑ','ˑ','ˑ','ˑ','ˑ',], 
  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
  ['(','O','ˑ','ˑ',')',], // <- Destroyed submarine
]

*/

function getTask(arr){
  const depth = arr.findIndex(r => /\(O+\)/g.test(r.join``));
  if(depth === -1) return 'Emergency assistance to victims'
  if(depth === 0) return 'Look for a submarine on the surface'
  const length = arr[depth].join``.match(/\(O+\)/g)[0].length;
  if(depth <= length) return `Start searching for a submarine at ${depth} depth`
  if(depth > length) return `Emergency search for a possibly damaged submarine at ${depth} depth`
}