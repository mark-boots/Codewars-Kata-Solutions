/*
⚠️Fusion Chamber Shutdown⚠️
https://www.codewars.com/kata/5fde1ea66ba4060008ea5bd9

A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

1. Hydrogen reacts with Oxygen   = H2O
2. Carbon   reacts with Oxygen   = CO2
3. Carbon   reacts with Hydrogen = CH4

FOR EXAMPLE:
(C,H,O) = (45,11,100)
return no. of water, carbon dioxide and methane molecules
Output should be like:
(5,45,0)
*/

const burner = (c, h, o) => {
    const fm = (a, b) => Math.floor(Math.min(a, b))
    
    const h2o = fm(o, h / 2)
    const co2 = fm(c, (o - h2o) / 2)
    const ch4 = fm(c - co2, (h - 2 * h2o) / 4)
  
    return [h2o, co2, ch4]
  }