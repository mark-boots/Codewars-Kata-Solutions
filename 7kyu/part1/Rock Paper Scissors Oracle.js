/*
Rock Paper Scissors Oracle
https://www.codewars.com/kata/580535462e7b330bd300003d


You are the rock paper scissors oracle.

Famed throughout the land, you have the incredible ability to predict which hand gestures your opponent will choose out of rock, paper and scissors.

Unfortunately you're no longer a youngster, and have trouble moving your hands between rounds. For this reason, you can only pick a single gesture for each opponent. If it's possible for you to win, you will, but you're also happy to tie.

Given an array of gestures — for example ["paper", "scissors", "scissors"] — return the winning gesture/s in the order in which they appear in the title, separated by a forward slash. For example, if rock and scissors could both be used to win you would return:

"rock/scissors"

If it's not possible for you to win then return:

"tie"

See https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors if you're not familiar with rock paper scissors.

Second attempt at my first Kata...

*/

function oracle(gestures, res=[]){
    const [r,p,s] = Object.values(gestures.reduce((prev,key)=> (prev[key]+=1,prev),{rock:0,paper:0,scissors:0}))
    if(s>p) res.push('rock')
    if(r>s) res.push('paper');
    if(p>r) res.push('scissors');
    return res.join("/") || 'tie';
  }