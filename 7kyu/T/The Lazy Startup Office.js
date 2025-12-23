/*
The Lazy Startup Office
https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1/train/javascript

The rota should start with Stefan and end with Dee, taking the left-right zigzag path as illustrated by the red line:


As an output you would expect in this case:

["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"])


*/

binRota=a=>a.flatMap((r,i)=>i%2?[...r].reverse():r)