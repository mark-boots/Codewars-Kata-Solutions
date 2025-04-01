/*
Working with Dictionaries
https://www.codewars.com/kata/5639302a802494696d000077/train/javascript

In this kata we have to create a function that will give us some specific information of a data base. We have a sequence of postive integers that is registered by OEIS with the code 001055. This sequence give us the amount of ways that a number may be expressed as a product of its factors (including the number itself multiplied by one.)

The first terms of this sequence are shown below:

n-th term    a(n)
1             1
2             1
3             1
4             2
5             1
6             2
7             1
8             3
9             2
10            2
11            1
12            4
13            1
14            2
15            2
16            5
In the preloaded section you are given a hash table named A001055 (Python and JavaScript) or $a001055 (Ruby), where keys are the numbers from 1 to 1006, and the values are the respective terms of the aforementioned sequence.

You have to create the function that receives three arguments:

An array with 2 elements that represent the numbers in range [a, b] to be considered.
A string with five possible valid values: "equals to", "higher than", "lower than", "higher and equals to", and "lower and equals to" (any other value is considered invalid).
The element of the A001055 sequence.
The function should return the amount of numbers that fulfill our conditions and a sorted list of these numbers.

Examples
We want to know about the numbers between 10 and 21 (included) that have more than 1 multiplicative partition:
range = [10, 21]
str = "higher than"
val = 1

result = (8, [10, 12, 14, 15, 16, 18, 20, 21])
We want to know the numbers between 25 and 75 that have more than or equals to 5 multiplicative partitions:
range = [25, 75]
str = "higher and equals to"
val = 5

result = (13, [30, 32, 36, 40, 42, 48, 54, 56, 60, 64, 66, 70, 72])
If the string command is wrong, the function will return "wrong constraint":
range = [25, 75]
str = "qwerty"
val = 5

result = "wrong constraint"

*/

function infDatabase([start, end], str, val, seq = A001055) {
  const dict = {
      "equals to": x => x === val,
      "higher than": x => x > val,
      "lower than": x => x < val,
      "higher and equals to": x => x >= val,
      "lower and equals to": x => x <= val,
  };

  if (!dict[str]) return "wrong constraint";

  const res = Array.from({ length: end - start + 1 }, (_, i) => start + i).filter(num => dict[str](seq[num]));

  return [res.length, res];
}