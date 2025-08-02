//[7 kyu] Bits Battle
function bitsBattle(numbers) {
    bits = numbers.map(v=>v.toString(2));
    odds = bits.filter(v => v.charAt(v.length-1) ==  1).join('').replace(/0/g,'').length;
    evens = bits.filter(v => v.charAt(v.length-1) ==  0).join('').replace(/1/g,'').length;
    return odds > evens ? 'odds win' : evens > odds ? 'evens win' : 'tie'
  }