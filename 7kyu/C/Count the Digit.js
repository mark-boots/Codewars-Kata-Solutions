//[7 kyu] Count the Digit
function nbDig(n, d) {
    const str = Array.from({length: n+1},(_,i)=> i**2).join('');
    return str.match(new RegExp(d, 'g')).length;
}