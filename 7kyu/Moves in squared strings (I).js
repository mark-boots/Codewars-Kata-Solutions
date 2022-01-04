//[7 kyu] Moves in squared strings (I)
const vertMirror = lines => lines.map(l => l.split``.reverse().join``).join('\n')
const horMirror = lines => lines.reverse().join('\n')
const oper = (fct, s) => fct(s.split('\n'))