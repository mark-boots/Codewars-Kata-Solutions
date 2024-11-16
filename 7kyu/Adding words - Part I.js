/*
Adding words - Part I
https://www.codewars.com/kata/592eaf848c91f248ca000012/train/javascript

This is the first part of this kata series. Second part is here and third part is here

Add two English words together!

Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that

  //javascript
  var k = new Arith("three");
  k.add("seven"); //this should return "ten" 
Input - Will be between zero and ten and will always be in lower case

Output - Word representation of the result of the addition. Should be in lower case

*/

class Arith{
  dict = [
    'zero','one','two','three','four','five','six','seven','eight','nine',
    'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty',
  ]
  constructor(word){
    this.number = this.dict.indexOf(word);
  }
  add(addword){
    return this.dict[this.number + this.dict.indexOf(addword)]
  }
}

