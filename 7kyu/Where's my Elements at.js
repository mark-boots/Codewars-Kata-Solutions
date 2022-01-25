/*
Where's my Elements at?
https://www.codewars.com/kata/5a0ec343c374cb6da0000006

An array is a data structure in which a collection of different data stored continuously in memory. This collection is usually accessed by a numerical index and allows near instant access to all of the data held by the array as opposed to other structures such as binary search trees or linked lists, where the computer has to traverse these structures to find the item being accessed.

To demonstrate, we'll calculate the position of an array element using some simple arithmetic.
Task Overview

Given:

    begin, a number which represents the location of the beginning of the array in memory,
    end, a number which represents the location of the end of the array in memory,
    index, a zero-based numerical key for the element being accessed,
    size, a number representing the size in bytes of each item of the array,

Return the memory address of the element being accessed.

If the index is negative or the address of the memory being accessed is at or greater than the end of the array, throw an Error. If programming in a language other than JavaScript, refer to the usage example for the correct exception type to throw. Otherwise, who knows what data we could be accessing!
Usage Example

elementLocation(0x1000, 0x1040, 0x3, 0x8) => 0x1018
elementLocation(0x1000, 0x1040, 0x8, 0x8) // throws Error
elementLocation(0x2000, 0x2100, 0x3, 0x4) => 0x200C
elementLocation(0x2000, 0x2100, 0x0, 0x4) => 0x2000

Constraints

    All types given will be valid.
    All numbers given are integers.
    end will be greater than or equal to begin
    begin, end, and size will be positive numbers.
    size will be a power of 2.
    begin is evenly divisible by 4.
    The difference of begin and end is evenly divisible by size.
*/

const elementLocation = (b,e,i,s,a=b+i*s) => {
    if (a<b || a>=e) throw new Error('Segmentation fault - core dumped');
    return a;
}
  