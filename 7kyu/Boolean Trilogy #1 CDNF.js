/*
Boolean Trilogy #1: CDNF
https://www.codewars.com/kata/5f76c4779164bf001d52c141

Theory
In Boolean algebra, any Boolean function takes the value 0 or 1 (True or False) and depends on Boolean variables, which also have two values 0 and 1. Any Boolean function can be placed in canonical disjunctive normal form (CDNF). CDNF is a conjunction of minterms - expressions that are true only on a single set of variable values. Only 3 logical operations are involved in a CDNF record: * (logical AND), + (logical OR), and ~ (logical negation).

Task
You get a truth table representing a Boolean function and must return its Canonical normal form (CDNF) as a string, using the following formatting/rules:

Variable names are always in order: "x1", "x2", ..., "xn".
The number of logical variables is between 1 and 5.
Output only terms where the result is true.
If the variable xi has the value "false" in the term, then it is written "~xi" in the output, otherwise "xi".
It is guaranteed that all truth tables are correctly built.
Construction CDNF
CDNF is based on the truth table, and only those rows in which the function value is true are taken.

In this kata, the truth table is a two-dimensional array whose elements are lists that store the value of the i-th Boolean variable in the i-th position and the value of the Boolean function in the last position.

For example, for the function x1 + x2 * x3 (hence x1 OR x2 AND x3), with n being the number of logical variables (here,n=3), the truth table will have 2**n rows with n+1 columns, and will look like this:

truthTable = [
//[x1,x2,x3,result]
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 1],   // Minterm (~x1 * x2 * x3)
  [1, 0, 0, 1],   // Minterm (x1 * ~x2 * ~x3)
  [1, 0, 1, 1],   // Minterm (x1 * ~x2 * x3)
  [1, 1, 0, 1],   // Minterm (x1 * x2 * ~x3)
  [1, 1, 1, 1],   // Minterm (x1 * x2 * x3)
]
And you shall return:

"(~x1 * x2 * x3) + (x1 * ~x2 * ~x3) + (x1 * ~x2 * x3) + (x1 * x2 * ~x3) + (x1 * x2 * x3)"
More examples in the Examples Test Cases.

*/

function cdnf(truthTable) {
    const variables = truthTable[0].slice(0, -1).map((_, index) => `x${index + 1}`);
    const minterms = 
          truthTable
            .filter(row => row[row.length - 1] === 1)
            .map(row => row.slice(0, -1).map((val, index) => val === 1 ? variables[index] : `~${variables[index]}`));
    const CDNF = minterms.map(minterm => `(${minterm.join(" * ")})`).join(" + ");
    return CDNF;
  }

cdnf=t=>t.filter(r=>r.pop()).map(r=>`(${r.map((x,i)=>`${x?'':'~'}x${i+1}`).join` * `})`).join` + `;
