//[8 kyu] Switch/Case - Bug Fixing #6
const evalObject = ({a, b, operation}) => eval(a+operation.replace('^','**')+b)