/*
The 12 Days of Christmas
https://www.codewars.com/kata/57dd3a06eb0537b899000a64/train/javascript

Task
You have to write a comparator function which can sort the lines back into their correct order, otherwise Christmas will be cancelled!

Reminder: Below is what the final verse should look like

On the 12th day of Christmas my true love gave to me
12 drummers drumming,
11 pipers piping, 
10 lords a leaping, 
9 ladies dancing, 
8 maids a milking,
7 swans a swimming, 
6 geese a laying, 
5 golden rings, 
4 calling birds,
3 French hens, 
2 turtle doves and 
a partridge in a pear tree.

*/

const comparator = (a,b) => 
  b[0] == 'O' || a[0] == 'a' ?  1 :
  a[0] == 'O' || b[0] == 'a' ? -1 :
  +(b.match(/^\d+/)) - +(a.match(/^\d+/))