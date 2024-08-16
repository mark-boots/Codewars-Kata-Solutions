/*
2D Vector Mapping
https://www.codewars.com/kata/5da995d583326300293ce4cb/train/javascript

Introduction
Imagine a function that maps a number from a given range, to another, desired one. If this is too vague - let me explain a little bit further: let's take an arbitrary number - 2 for instance - and map it with this function from range 0-5 to, let's say - 10-20. Our number lies in 2/5 of the way in it's original range, so in order to map it to the desired one we need to find a number that lies exactly in the same place, but in our new range. This number, in this case, is 14. You can visualize this as taking a 5cm piece of rubber, putting it next to the ruler, marking the dot on the second centimeter, then stretching the rubber between 10th and 20th centimeter and reading the value next to the dot.

Task
The task in this kata is, unfortunately, a little bit more complex. We will take the same idea, but apply it to the 2-dimensional plane, so instead of single numbers, we will consider vectors with their x-position and y-position, instead of ranges, we will look at the circles with given centers and radii.

You need to write a function called map_vector (or mapVector) that takes 3 arguments - vector, circle1, circle2 and returns a tuple/array/slice of x, y positions of the mapped vector. All three arguments will be tuples (arrays), the first one with x, y positions of a base vector, the second and third with x, y positions of the center of a circle and it's radius. The base vector will always be within the first circle and you need to map it from the first circle to the second. The coordinates should be precise up to second decimal place.

*/

function mapVector(vector, circle1, circle2) {
  return [
    ((vector[0] - circle1[0]) * circle2[2]) / circle1[2] + circle2[0],
    ((vector[1] - circle1[1]) * circle2[2]) / circle1[2] + circle2[1],
  ];
}
