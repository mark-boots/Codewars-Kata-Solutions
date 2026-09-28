//[7 kyu] Birthday II - Presents
function present(x, y){
    console.log([x,y]);
    if(x == 'badpresent') return 'Take this back!';
    if(x == 'goodpresent') return String.fromCharCode(...[...x].map(v=>v.charCodeAt(0) + y));
    if(['crap','empty'].includes(x)) return [...x].sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join('');
    if(x == 'bang') return [...x].map(v => v.charCodeAt(0) - y).reduce((a,b)=>a+b,0);
    return `pass out from excitement ${y} times`
  }