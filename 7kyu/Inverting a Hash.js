/*
Inverting a Hash
https://www.codewars.com/kata/5b5604e26dc79e6832000101/train/javascript

Summary
Given a Hash made up of keys and values, invert the hash by swapping them.

Examples
Given:

  { a: '1',
    b: '2',
    c: '3' }

Return:

  { 1: 'a',
    2: 'b',
    3: 'c' }



Given:

  { foo:   'bar',
    hello: 'world' }

Return:

  { bar:   'foo',
    world: 'hello' }

*/

function invertHash(hash) {
  return Object.entries(hash).reduce((obj, [key, val]) => (obj[val] = key, obj), {})
}