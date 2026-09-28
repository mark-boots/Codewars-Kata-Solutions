/*
Wrapping Paper
https://www.codewars.com/kata/69ea4c6708b1c58c36ac735a/train/javascript

You are building a utility that calculates the total amount of wrapping paper required for a set of rectangular boxes.

Each box is defined by three integer dimensions: length (l), width (w), and height (h).

For each box, the required wrapping paper is equal to:

The surface area of the box
Plus slack equal to the area of the smallest side
Input: A list of boxes, where each box is represented as a tuple or object containing three integers (l, w, h).

Output: A single integer representing the total amount of wrapping paper required for all boxes in the list.
*/

function wrappingPaper(boxes) {
  return boxes.reduce((s, x) => {
    let [l,w,h]=x.sort((a,b)=>a-b);
    return (l*w+l*h+w*h)*2+l*w+s
  },0)
}

