/*
GA-DE-RY-PO-LU-KI cypher
https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript

Introduction
The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".

 G => A
 g => a
 a => g
 A => G
 D => E
  etc.
The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

Task
Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

Input/Output
The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

Example
 encode("ABCD")          // => GBCE 
 encode("Ala has a cat") // => Gug hgs g cgt 
 encode("gaderypoluki"); // => agedyropulik
 decode("Gug hgs g cgt") // => Ala has a cat 
 decode("agedyropulik")  // => gaderypoluki
 decode("GBCE")          // => ABCD

 */

 const cypher = 'GADERYPOLUKI'.match(/.{2}/g).reduce((o, [a,b]) => {
  o[a]=b; o[a.toLowerCase()]=b.toLowerCase();
  o[b]=a; o[b.toLowerCase()]=a.toLowerCase();
  return o
}, {});

const decode = encode = s => s.replace(/./g, c => cypher[c] || c)