/*
Paperboy
https://www.codewars.com/kata/56ed5f13c4e5d6c5b3000745/train/javascript

You and your best friend Stripes have just landed your first high school jobs! You'll be delivering newspapers to your neighbourhood on weekends. For your services you'll be charging a set price depending on the quantity of the newspaper bundles.

The cost of deliveries is:

$3.85 for 40 newspapers
$1.93 for 20
$0.97 for 10
$0.49 for 5
$0.10 for 1
Stripes is taking care of the footwork doing door-to-door drops and your job is to take care of the finances. What you'll be doing is providing the cheapest possible quotes for your services.

Write a function that's passed an integer representing the amount of newspapers and returns the cheapest price. The returned number must be rounded to two decimal places.

*/

function cheapestQuote(newspapers) {
  const deliveryCosts = [ [40, 3.85], [20, 1.93], [10, 0.97], [5, 0.49], [1, 0.10] ]
  let total = 0;
  while (newspapers > 0) {
    const [bundle, price] = deliveryCosts.find(c => c[0] <= newspapers);
    newspapers -= bundle;
    total += price;
  }
  return Math.round(total * 100) / 100
}