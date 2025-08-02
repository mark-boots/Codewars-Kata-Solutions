/*
Extended weekends
https://www.codewars.com/kata/5be7f613f59e0355ee00000f

If the first day of the month is a Friday, it is likely that the month will have an Extended Weekend. That is, it could have five Fridays, five Saturdays and five Sundays.

In this Kata, you will be given a start year and an end year. Your task will be to find months that have extended weekends and return:

- The first and last month in the range that has an extended weekend
- The number of months that have extended weekends in the range, inclusive of start year and end year.

For example:

solve(2016,2020) = ["Jan","May",5]. //The months are: Jan 2016, Jul 2016, Dec 2017, Mar 2019 and May 2020

More examples in test cases. Good luck!
*/

const solve = (a, b) =>{
    const months = {Jan:0,Mar:2,May:4,Jul:6,Aug:7,Oct:9,Dec:11}, x = []  
    for(let year = a; year <=b; year++){
      Object.entries(months).forEach(month=>{
        if(new Date(year,month[1],1).getDay()==5) x.push(month[0])
      })
    }
    return [x[0],x[x.length-1],x.length]
  }