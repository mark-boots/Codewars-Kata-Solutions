/*
Thinking & Testing : Incomplete string
https://www.codewars.com/kata/56d9292cc11bcc3629000533/train/javascript

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

const {assert} = require("chai");

describe("Sample tests", () => {
  //return s ?
  it("\"\"", () => assert.strictEqual(testit(""), ""));
  it("a",    () => assert.strictEqual(testit("a"), "a"));
  it("b",    () => assert.strictEqual(testit("b"), "b"));
  //return s.substr(0,1) ?
  it("aa", () => assert.strictEqual(testit("aa"), "a"));
  it("ab", () => assert.strictEqual(testit("ab"), "a"));
  it("bc", () => assert.strictEqual(testit("bc"), "b"));
  //return s.substr(0,s.length/2) ?
  it("aaaa",   () => assert.strictEqual(testit("aaaa"), "aa"));
  it("aaaaaa", () => assert.strictEqual(testit("aaaaaa"), "aaa"));
  //click "Submit" try more testcase...
});

*/

function testit(s){
  const str = s.replace(/.{2}/g, (m) => {
    const [b,a] = m.split('').map(l => l.charCodeAt(0)).sort((a,b) => b - a);
    const letter = String.fromCharCode(a + Math.floor((b - a) / 2));
    return letter
  });
  return str
}
