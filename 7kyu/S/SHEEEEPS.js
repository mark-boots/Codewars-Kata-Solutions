/*
SHEEEEPS
https://www.codewars.com/kata/6912508732aab96c59c09c7d/train/javascript

HI! You have the array of sheeps:

['sheep', 'sheep', 'sheep', 'sheep'...]

But somebody is "sick":

['shpee', 'sheep', 'hspee', 'sheep', 'pehes'...]

You can help them:

shpee => sheep

pehes => sheep

Because shpee and pehes have 1 s, 1 h, 2 e, 1 p.

shep !=> sheep

And:

sheeep !=> sheep

return array(list) with "sheep". if you can't help - delete.

Hard register!!!
A!==a

Example:
ShEep !=> sheep

*/

reloadSheeps=a=>a.filter(v=>[...v].sort().join``=='eehps').fill('sheep')
