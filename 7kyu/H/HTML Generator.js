/*
HTML Generator
https://www.codewars.com/kata/54eecc187f9142cc4600119e/train/javascript

o organize your code, make of all your functions methods of a class called HTMLGen. Tag functions should be named after the tag of the element they create. Each function will take one argument, a string, which is the inner HTML of the element to be created. The functions will return the string for the appropriate HTML element.

For example,

JavaScript:

var g = new HTMLGen();
var paragraph = g.p('Hello, World!');
var block = g.div(paragraph);

// The following are now true
paragraph === '<p>Hello, World!</p>'
block === '<div><p>Hello, World!</p></div>'
Your HTMLGen class should have methods to create the following elements:

a
b
p
body
div
span
title
comment
Note: The comment method should wrap its argument with an HTML comment. It is the only method whose name does not match an HTML tag. So, g.comment('i am a comment') must produce <!--i am a comment-->.

*/

class HTMLGen{
  constructor(){
    return new Proxy(this,{
      get:(_,t)=>s=>t=='comment'?`<!--${s}-->`:`<${t}>${s}</${t}>`
    })
  }
}

function HTMLGen(){return new Proxy(this,{get:(_,t)=>s=>t[0]=='c'?`<!--${s}-->`:`<${t}>${s}</${t}>`})}