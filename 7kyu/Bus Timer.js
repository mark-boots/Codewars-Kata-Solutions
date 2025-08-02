/*
Bus Timer
https://www.codewars.com/kata/5736378e3f3dfd5a820000cb

It's been a tough week at work and you are stuggling to get out of bed in the morning.

While waiting at the bus stop you realise that if you could time your arrival to the nearest minute you could get valuable extra minutes in bed.

There is a bus that goes to your office every 15 minute, the first bus is at 06:00, and the last bus is at 00:00.

Given that it takes 5 minutes to walk from your front door to the bus stop, implement a function that when given the curent time will tell you much time is left, before you must leave to catch the next bus.
Examples

"05:00"  =>  55
"10:00"  =>  10
"12:10"  =>  0
"12:11"  =>  14
*/

const busTimer = (time) => {
    const [h,m] = time.split`:`.map(Number)
    
    const t = (h * 60 + 5 + m) % 1440
    const d = t < 360 ? 360 : 15
    
    return (d - t % d) % d
  }