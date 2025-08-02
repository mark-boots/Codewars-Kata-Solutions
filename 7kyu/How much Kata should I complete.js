/*
How much Kata should I complete?
https://www.codewars.com/kata/5fd8bd0e23708100225415dc

I am learning how to solve Katas and become better with each kyu.

In this Kata imagine that I can solve only Katas from my own level or lower (kyu level). Return the minimum of Katas number that I have to solve to get at least the same score. Also my score is equal to start of my kyu's score.
INPUT

function howMuchTo( score, current )

    score - my uncle's score. (0 <= score <= 250000)
    current - my current kyu. (String in format "(kyu|dan)_N", where 1 <= N <= 8)

OUTPUT

The number of Katas I have to solve to get at least given score.
Useful info

You can check this on Codewars Wiki but I'll preload 2 objects: solvingScore with data about getting score for each Kata level and requiredScore with data about required score for promotion.

On 1-2 dan level I continue completing 1 kyu Katas.
*/

const howMuchTo = (score, current, myScore = requiredScore[current]) => {
    if (myScore >= score) return 0;
    let levels = Object.keys(requiredScore);
    let level = levels.indexOf(current);  
    let points = solvingScore[/^dan/.test(current) ? 1 : current.slice(-1)];
    let solves = Math.ceil((Math.min(score, requiredScore[levels[level + 1]] || score) - myScore) / points);
    return solves + howMuchTo(score, levels[level + 1] || current, myScore + solves * points);
  }