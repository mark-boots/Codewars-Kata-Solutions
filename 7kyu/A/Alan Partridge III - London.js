/*
Alan Partridge III - London
https://www.codewars.com/kata/580a41b6d6df740d6100030c

Ever the learned traveller, Alan Partridge has pretty strong views on London:

"Go to London. I guarantee you'll either be mugged or not appreciated.
Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."

Your job is to check that the provided list of stations contains all of the stops Alan mentions. There will be other stations in the array. Example:

['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']

If the stations all appear, return 'Smell my cheese you mother!', if not, return 'No, seriously, run. You will miss it. '.

Other katas in this series:

Alan Partridge I - Partridge Watch
Alan Partridge II - Apple Turnover
*/

const S = ['Rejection','Disappointment','Backstabbing Central','Shattered Dreams Parkway']
const R = ['No, seriously, run. You will miss it.','Smell my cheese you mother!']

const alan = x => R[+S.every(v=>x.includes(v))]