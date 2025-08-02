/*
Alphabetical Grid
*/
function grid(N) {
    if(N < 0) return null;
    
    const a = 'abcdefghijklmnopqrstuvwxyz';
    const lines = [];
    
    for(let i = 0; i < N; i ++){
      const line = [];
      for(let j = 0; j < N; j++){
        const index = (i + j + 26) % 26
        line.push(a[index])
      }
      lines.push(line.join(' '));
    }
    
    return lines.join('\n')
  }