//[7 kyu] Birthday I - Cake
const cake = (x,y) => x*0.7>[...y].reduce((a,b,i)=>a+(i%2==0?b.charCodeAt(0):b.charCodeAt(0)-96),0)?'That was close!':'Fire!'