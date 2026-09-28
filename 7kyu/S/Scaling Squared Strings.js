//[7 kyu] Scaling Squared Strings
function scale(str, k, n) {
    if(str.length == 0) return '';
    lines = str.split('\n');
    output = [];
    for(let i = 0; i < lines.length; i++){
      for(let j = 0; j < n; j++){
        output.push([...lines[i]].map(c => c.repeat(k)).join(''))
      }
    }
    return output.join('\n')
  }