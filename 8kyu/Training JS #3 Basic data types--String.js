//[8 kyu] Training JS #3: Basic data types--String
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
const overAbundant = ([...fnName]) => fnName.map(v=>eval(v.toLowerCase()+(v===v.toUpperCase()?'1':'2'))).join('')
function Dad(){ return overAbundant(arguments.callee.name) }
function Bee(){ return overAbundant(arguments.callee.name) }
function banana(){ return overAbundant(arguments.callee.name) }
const answer1 = () => 'no';
const answer2 = () => 'no';
const answer3 = () => 'yes';