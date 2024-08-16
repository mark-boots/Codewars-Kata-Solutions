/*
Odder than the rest - 2
https://www.codewars.com/kata/5d72704499ee62001a7068c7

Some integral numbers are odd. All are more odd, or less odd, than others.

Even numbers satisfy n = 2m ( with m also integral ) and we will ( completely arbitrarily ) think of odd numbers as n = 2m + 1.
Now, some odd numbers can be more odd than others: when for some n, m is more odd than for another's. Recursively. :]
Even numbers are always less odd than odd numbers, but they also can be more, or less, odd than other even numbers, by the same mechanism.

Task
Given a non-empty finite list of unique integral ( not necessarily non-negative ) numbers, determine the number that is odder than the rest.
Given the constraints, there will always be exactly one such number.

Examples
oddest([1,2]) => 1
oddest([1,3]) => 3
oddest([1,5]) => 5
Hint
Click here.
How odd is -1 ?
*/  


const oddness = n => {
    // If the number is even, return 0
    if (n % 2 === 0) return 0;  
    
    // If the number is -1, return a large number (indicating it's very odd)
    if (n === -1) return 1e6;
  
    // Otherwise, recursively compute the oddness of (n-1)/2 and add 1
    return 1 + oddness((n - 1) / 2);
};

const oddest = a => {
    // If there's only one number in the array, it's the odder one
    if (a.length === 1) return a[0];
  
    // Filter out odd numbers from the array
    const odds = a.filter(x => x % 2 !== 0);
  
    // If there are no odd numbers, recursively compute oddest for each number divided by 2
    if (odds.length === 0) return 2 * oddest(a.map(x => x / 2));
  
    // Find the maximum oddness among the odd numbers
    const max = odds.map(oddness).reduce((a, b) => Math.max(a, b), 0);

    // Filter out the numbers with maximum oddness
    const xs = odds.filter(x => oddness(x) === max);

    // If there are multiple numbers with maximum oddness, apply oddest recursively to each
    if (xs.length > 1) return oddest(xs.map(x => (x - 1) / 2)) * 2 + 1;

    // Otherwise, return the single number with maximum oddness
    return xs[0];
};
