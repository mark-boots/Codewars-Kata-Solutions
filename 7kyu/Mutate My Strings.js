/*
Mutate My Strings
https://www.codewars.com/kata/59bc0059bf10a498a6000025

I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/

function mutateMyStrings(stringOne, stringTwo){
    const s1 = [...stringOne]
    const s2 = [...stringTwo]
    let mutated = stringOne+'\n';
  
    for(let i = 0; i < s1.length; i++) {
      if(s1[i] !== s2[i]) {
        s1[i] = s2[i];
        mutated+=s1.join('')+'\n';
      }
    }
    return mutated
  }
// mutateMyStrings=(s1,s2)=>[...new Set([...s1,''].map((_,i)=>s2.slice(0,i)+s1.slice(i)+'\n'))].join``