/*
Binary Tree Search (not BST)
https://www.codewars.com/kata/5acc79efc6fde7838a0000a0/train/javascript

Given a number and a binary tree ( not a Binary Search Tree! ):

return True/true if the given number is in the tree
return False/false if it isn't
Each node in the binary tree is either of this Node class or null:

*/
function search(n, root) {
  if (root === null) return false;
  if (root.value === n) return true;
  return search(n, root.left) || search(n, root.right);
}
