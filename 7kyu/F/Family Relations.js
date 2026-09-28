/*
Family Relations
https://www.codewars.com/kata/5eaf798e739e39001218a2f4

This kata provides you with a list of parent-child pairs family_list, and from this family description you'll need to find the relationship between two members(what is the relation of latter with former) which is given as target_pair.

For example, the family list may be given as:

[['Enid', 'Susan'], ['Susan', 'Deborah'], ['Enid', 'Dianne']]

This describes the family:

      Enid
        |
   |---------|
 Susan     Dianne
   |
Deborah

The relationship pair ('Deborah', 'Enid') should return 'Grandmother' as Enid is Deborah's Grandmother.

This family tree can cover up to 3 generations, with varying numbers of children for each parent. We only focus on the females in the family, and so children will have only one parent.

The possible responses are Mother, Daughter, Grandmother, Granddaughter, Sister, Cousin, Aunt, Niece (each matching their 'real life' equivalents). There will always be a valid answer.

Enjoy, and be nice to your Mother!

*/

function relations (f, t) {
    const fam = f.reduce((o, e)=> (o[e[1]] = e[0], o), {})
    console.log(fam);
    if(t[0] === fam[fam[t[1]]]) return 'Granddaughter';
    if(t[0] === fam[t[1]]) return 'Daughter';
    if(t[1] === fam[t[0]]) return 'Mother';
    if(t[1] === fam[fam[t[0]]]) return 'Grandmother';
    if(fam[t[0]] === fam[t[1]]) return 'Sister';
    if(fam[t[1]] === fam[fam[t[0]]]) return 'Aunt';
    if(fam[fam[t[0]]] === fam[fam[t[1]]]) return 'Cousin';
    return 'Niece';
  }