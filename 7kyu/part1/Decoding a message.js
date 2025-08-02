//[7 kyu] Decoding a message
function decode(message){
    const a = 'abcdefghijklmnopqrstuvwxyz'
    const rev = [...a].reverse().join('');
    return [...message].map(v => v === ' ' ? ' ' : rev[a.indexOf(v)]).join('')
  }