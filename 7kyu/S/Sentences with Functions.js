/*
Sentences with Functions
https://www.codewars.com/kata/52567c56cb6ac86b56000516/train/javascript

Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."

*/

'Adam has a dog The name of the is also'.split` `.map(w=>globalThis[w]=n=>`${w}${n?' '+n:'.'}`)