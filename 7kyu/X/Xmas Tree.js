/*
Xmas Tree
https://www.codewars.com/kata/577c349edf78c178a1000108

Pad with underscores (_) so each line is the same length. Also remember the trunk/stem of the tree.
Examples

The final idea is for the tree to look like this if you decide to print each element of the list:

n = 5 will result in:

____#____              1
___###___              2
__#####__              3
_#######_              4
#########       -----> 5 - Height of Tree
____#____        1      
____#____        2 - Trunk/Stem of Tree

n = 3 will result in:

__#__                  1
_###_                  2
#####          ----->  3 - Height of Tree
__#__           1
__#__           2 - Trunk/Stem of Tree

*/

function xMasTree(n, tree = []){
    for(let i = 1; i<=n; i++){
      tree.push("_".repeat(n-i) + "#".repeat(i*2-1) + "_".repeat(n-i))
    }
    return [...tree, tree[0],tree[0]]
  }