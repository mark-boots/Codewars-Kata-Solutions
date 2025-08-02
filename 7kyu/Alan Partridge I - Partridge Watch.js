/*
Alan Partridge I - Partridge Watch
https://www.codewars.com/kata/5808c8eff0ed4210de000008

To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.

Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of ! after the t should be determined by the number of Alan related terms you find in the provided array (x). The related terms are:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad

If you don't find any related terms, return 'Lynn, I've pierced my foot on a spike!!'

All Hail King Partridge

Other katas in this series:

Alan Partridge II - Apple Turnover
Alan Partridge III - London
*/

const lookup = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
function part(x){
  let found = '';
  for(let i = 0; i < x.length; i++){
    if(lookup.includes(x[i])) found+='!'
  }
  return found.length > 0 ? `Mine\'s a Pint${found}` : "Lynn, I've pierced my foot on a spike!!";
}