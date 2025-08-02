/*
Thinking & Testing : Math of Primary School
https://www.codewars.com/kata/56d9b46113f38864b8000c5a/train/javascript

No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!

const { assert } = require("chai");

describe("Sample Tests", () => {
  it("", () => {
    //Add? subtract? multiply? divide? Who and who?
    assert.strictEqual(testit([0,0,0,0]), 0, "")
    assert.strictEqual(testit([0,0,0,1]), 0, "")
    assert.strictEqual(testit([0,0,1,1]), 0, "")
    assert.strictEqual(testit([0,1,0,1]), 0, "")
    assert.strictEqual(testit([0,1,1,0]), 1, "")
    assert.strictEqual(testit([1,0,0,1]), 1, "")
    //Click "Submit" try more testcase...
  });
});

*/

testit=a=>a[0]*a[3]+a[1]*a[2]