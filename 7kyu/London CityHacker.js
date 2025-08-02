/*
London CityHacker
https://www.codewars.com/kata/5bce125d3bb2adff0d000245

You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']

Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

*/


const formatPrice = (price, language, currency) => new Intl.NumberFormat(language, {style:'currency', currency}).format(price)
                                                 
const londonCityHacker = journey => {
  const [price] = journey.reduce(([tot,bus],val)=>{
    return [
      tot + (typeof val == 'string' ? 2.40: !bus ? 1.5 : 0),
      !bus && typeof val == 'number'
    ]
  }, [0])
  return formatPrice(price, 'en-GB', 'GBP')
}