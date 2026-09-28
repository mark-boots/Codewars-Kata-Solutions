/*
Christmas mission: Programmer's Christmas #1
https://www.codewars.com/kata/58520e8edeb17c711c00019b/train/javascript

Description
Christmas is coming soon. As a programmer, you need to complete a series of tasks to welcome the arrival of Christmas. This time your task is:

Given an array of functions, where each function returns a single character (with no duplicates). Return a string of the function names separated by commas, which can make the string "Merry Christmas!".

You can assume that all the necessary functions are provided.

Example
funcs = [a, b, c, d, e, f, g, h, i, j, k, l, m]
/* where:
    a => "M",  b => "e",  c => "r",  d => "y",  e => "C",
    f => "h",  g => "i",  h => "s",  i => "t",  j => "m",
    k => "a",  l => " ",  m => "!"

// the result should be:
//"a,b,c,c,d,l,e,f,c,g,h,i,j,k,h,m"
// because: 
//a()+b()+c()+c()+d()+l()+e()+f()+c()+g()+h()+i()+j()+k()+h()+m() == "Merry Christmas!"

*/

function merryChristmas(funcs){
  const F = funcs.reduce((o, f) => (o[f()] = f.name, o), {})
  return [...'Merry Christmas!'].map(c => F[c]).join`,`
}

merryChristmas=(f,m=f.reduce((o,f)=>(o[f()]=f.name,o),{}))=>[...'Merry Christmas!'].map(c=>m[c]).join`,`

merryChristmas=f=>[..."Merry Christmas!"].map(c=>f.find(f=>f()==c).name).join`,`