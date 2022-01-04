//[8 kyu] Job Matching #1
const match = ({minSalary}, {maxSalary}) => minSalary && maxSalary ? minSalary * .9 <= maxSalary : error()