/*
2 DNAs sequences, coding for same protein?
https://www.codewars.com/kata/57cbb9e240e3024aae000b26/train/javascript

In genetics 2 differents DNAs sequences can code for the same protein.

This is due to the redundancy of the genetic code, in fact 2 different tri-nucleotide can code for the same amino-acid. For example the tri-nucleotide 'TTT' and the tri-nucleotide 'TTC' both code for the amino-acid 'F'. For more information you can take a look here.

Your goal in this kata is to define if two differents DNAs sequences code for exactly the same protein. Your function take the 2 sequences you should compare. For some kind of simplicity here the sequences will respect the following rules:

It is a full protein sequence beginning with a Start codon and finishing by an Stop codon
It will only contain valid tri-nucleotide.
The translation hash is available for you under a translation hash $codons [Ruby] or codons [Python and JavaScript].

*/

const x = y => y.replace(/.{3}/g, m => codons[m])
const codeForSameProtein = (a, b) => x(a) == x(b)

//

codeForSameProtein=(a,b,x=y=>y.replace(/.{3}/g,m=>codons[m]))=>x(a)==x(b)