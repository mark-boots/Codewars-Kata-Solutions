/*
Countdown to Christmas
https://www.codewars.com/kata/56f6b23c9400f5387d000d48

Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.

The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.

Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.

Watch out for leap years!

*/

function daysUntilChristmas(d) {
    let c = new Date(d.getFullYear(),11,25);
    if(c < d) c.setYear(d.getFullYear()+1)
    return (c - d) / 86400000;
}