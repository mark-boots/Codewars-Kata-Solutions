/*
Thinking & Testing : Retention and discard

No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!

//In order to solve this Kata, and even discarded everything
Test.assertSimilar(testit(-1), [], "");
Test.assertSimilar(testit(0), [], "");
Test.assertSimilar(testit(1), [1], "");
Test.assertSimilar(testit(2), [1], "");
Test.assertSimilar(testit(3), [1,3], "");
Test.assertSimilar(testit(4), [1], "");
Test.assertSimilar(testit(5), [1,5], "");
Test.assertSimilar(testit(6), [1,3], "");
Test.assertSimilar(testit(7), [1,7], "");
Test.assertSimilar(testit(8), [1], "");
Test.assertSimilar(testit(9), [1,3,9], "");
Test.assertSimilar(testit(10), [1,5], "");
//click "Submit" try more testcase...

*/

function testit(n) {
  if (n < 1) return [];
  const result = [1];
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 1 && n % i === 0) result.push(i);
  }
  return result;
}