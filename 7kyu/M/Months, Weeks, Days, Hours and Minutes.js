/*
Months, Weeks, Days, Hours and Minutes
https://www.codewars.com/kata/5b2a10fe9e40b9b43d00008c/train/javascript

Given a number of minutes, translate it into a readible human timestamp.

For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

Given that each month has 28 days.

The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to Months, Weeks, Days, Hours and Minutes.

*/

function displayValue(value) {
  const units = [
    ["month", 28 * 24 * 60],
    ["week", 7 * 24 * 60],
    ["day", 24 * 60],
    ["hour", 60],
    ["minute", 1]
  ]
  
  return units.map(([name, size]) => {
    const count = Math.floor(value / size)
    value %= size
    return count ? `${count} ${name}${count > 1 ? "s" : ""}` : ""
  }).filter(Boolean).join(" ")
}