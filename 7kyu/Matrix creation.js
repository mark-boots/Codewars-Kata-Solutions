/*
Matrix creation
https://www.codewars.com/kata/5a34da5dee1aae516d00004a/train/javascript

Create an identity matrix of the specified size ( >= 0 ).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   

*/

function getMatrix(number) {
  return Array.from({length: number }, (_,i) =>
      Array.from({length: number }, (_,j) => +(i==j))
  );
}

getMatrix=n=>Array.from({length:n},(_,y)=>Array.from({length:n},(_,x)=>+(y==x)))