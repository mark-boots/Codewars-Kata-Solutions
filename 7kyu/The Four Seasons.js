/*
The Four Seasons
https://www.codewars.com/kata/5846174c5955406d02000b59

I highly recommend listening Vivaldi's Four Seasons as an inspiration to solve this Kata :)

In the UK, winter begins on 21 December and ends on 20 March. Spring begins on 21 March and ends on 20 June. Summer begins on 21 June and ends on 20 September. Autumn begins on 21 September and ends on 20 December.

Given a date day from 1 (January 1st) to 365 (December 31th) your task is to return the season of the year that corresponds to that day. If the number given is greater than 365, return "The year flew by!".

Note: We are not considering leap years.


*/

const fourSeasons = (day, d=new Date(2022,0,day)) =>
  day > 365 ? 
    'The year flew by!' :
    ['Winter','Spring','Summer','Autumn'][Math.floor((d.getMonth()+(d.getDate()>=21))/3)%4] + ' Season'