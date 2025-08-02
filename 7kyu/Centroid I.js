/*
Centroid I
https://www.codewars.com/kata/58811e9cfd05cb5aed0000a4

Write a function centroid(c) to calculate the centroid of 3D coordinates.

Return the results as a list of floats. Round the values to two decimal places.

*/

function centroid(c){
    const center = (idx) => Math.round(c.reduce((sum, val) => sum + val[idx], 0) / c.length * 100) / 100
    return [center(0), center(1), center(2)];
}

//centroid=c=>(f=i=>Math.round(c.reduce((s,v)=>s+v[i],0)/c.length*100)/100,[f(0),f(1),f(2)])