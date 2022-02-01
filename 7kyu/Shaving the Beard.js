/*
Shaving the Beard
https://www.codewars.com/kata/57efa1a2108d3f73f60000e9

Today was a sad day. Having bought a new beard trimmer, I set it to the max setting and shaved away at my joyous beard. Stupidly, I hadnt checked just how long the max setting was, and now I look like Ive just started growing it!

Your task, given a beard represented as an arrayof arrays, is to trim the beard as follows:

['|', 'J', '|', '|'],
['|', '|', '|', 'J'],
['...', '...', '...', '...'];

To trim the beard use the following rules:

trim any curled hair --> replace 'J' with '|' trim any hair from the chin (last array) --> replace '|' or 'J' with '...'

All sub arrays will be same length. Return the corrected array of arrays

*/

const trim = x => x.map(v=>v.map(v=>v=='J'?'|':v)).slice(0,-1).concat(x.map(v=>v.map(v=>v='...')).slice(-1))