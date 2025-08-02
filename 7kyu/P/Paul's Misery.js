/*
Paul's Misery
https://www.codewars.com/kata/57ee31c5e77282c24d000024/

Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1

The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'


*/

const points = { 
    'kata': 5, 
    'Petes kata': 10, 
    'life': 0, 
    'eating': 1 
  }
  
  const results = [ 
    [-1/0,40,'Super happy!'],
    [40,70,'Happy!'],
    [70,100,'Sad!'],
    [100,1/0,'Miserable!']
  ]
  
  const paul = x => {
    let score = x.reduce((acc,curr)=>acc + points[curr], 0);
    let result = results.find(v=> score >= v[0] && score < v[1]);
    return result[2]
  }