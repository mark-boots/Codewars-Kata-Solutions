/*
Check your arguments

Bob has written a function to detect the type of an object. It receives any primitive values or objects, and returns its object type as a string. But it seems to be working incorrectly. Can you figure out why, and fix the code for him?

*/
function objectType(obj) {
  return Object.prototype.toString.call(arguments.length ? obj : null);
}

objectType=(...a)=>Object.prototype.toString.call(...a,null)