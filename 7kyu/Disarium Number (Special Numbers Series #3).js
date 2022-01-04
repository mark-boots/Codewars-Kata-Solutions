//[7 kyu] Disarium Number (Special Numbers Series #3)
const disariumNumber = n => n == [...''+n].reduce((a,b,i)=> a + b**++i, 0) ? 'Disarium !!' : 'Not !!'