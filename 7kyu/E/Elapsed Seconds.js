/*
Elapsed Seconds
https://www.codewars.com/kata/517b25a48557c200b800000c/train/javascript

Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime (Python), Time (Ruby), and Data.Time.Clock.UTCTime (Haskell) instances.
The start time will always be before the end time.
*/

elapsedSeconds=(s,e)=>(e-s)/1e3