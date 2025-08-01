/*
Batman Quotes
https://www.codewars.com/kata/551614eb77dd9ee37100003e/train/javascript

Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a number. They need help getting things back in order.

Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

Return the quote along with the character who said it:

getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n") 
  // =>  "Robin: Holy haberdashery, Batman!
Hint: You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string. The quotes either belong to "Batman", "Robin", or "Joker".

*/

getQuote=(q,h)=>`${'Batman Robin Joker'.split` `.find(c=>c[0]==h[0])}: ${q[h.match(/\d/)]}`
