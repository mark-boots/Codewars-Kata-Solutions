/*
I guess this is a 7kyu kata #6: Fruit Ninja I
https://www.codewars.com/kata/57d60363a65454701d000e11/train/javascript

Description
You are a Fruit Ninja, your skill is cutting fruit. All the fruit will be cut in half by your knife. For example:

[  "apple",     "pear",     "banana"  ]  --> ["app", "le", "pe", "ar", "ban", "ana"]
As you see, all fruits are cut in half. You should pay attention to "apple": if you cannot cut a fruit into equal parts, then the first part will has a extra character.

You should only cut the fruit, other things should not be cut, such as the "bomb":

[  "apple",     "pear",     "banana",   "bomb"]  -->
["app", "le", "pe", "ar", "ban", "ana", "bomb"]
The valid fruit names are preloaded for you as:

fruitsName
Task
Complete function cutFruits that accepts argument fruits. Returns the result in accordance with the rules above.

OK, that's all. I guess this is a 7kyu kata. If you agree, please rank it as 7kyu and vote very;-) If you think this kata is too easy or too hard, please shame me by rank it as you want and vote somewhat or none :[

*/

cutFruits=f=>f.reduce((a,v)=>(fruitsName.includes(v)?a.push(v.slice(0,m=Math.ceil(v.length/2)),v.slice(m)):a.push(v),a),[])

cutFruits=f=>f.reduce((a,v)=>(fruitsName.includes(v)?(m=(v.length+1>>1),a.push(v.slice(0,m),v.slice(m))):a.push(v),a),[])