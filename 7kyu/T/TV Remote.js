//[7 kyu] TV Remote
var tvRemote = function(word) {
    const keys = {
      a: [0,0], b: [0,1], c: [0,2], d: [0,3], e: [0,4], 1: [0,5], 2: [0,6], 3: [0,7],
      f: [1,0], g: [1,1], h: [1,2], i: [1,3], j: [1,4], 4: [1,5], 5: [1,6], 6: [1,7],
      k: [2,0], l: [2,1], m: [2,2], n: [2,3], o: [2,4], 7: [2,5], 8: [2,6], 9: [2,7],
      p: [3,0], q: [3,1], r: [3,2], s: [3,3], t: [3,4], ".": [3,5], "@": [3,6], 0: [3,7],
      u: [4,0], v: [4,1], w: [4,2], x: [4,3], y: [4,4], z: [4,5], _:[4,6], "/": [4,7]
    }
    let currentPos = [0,0];
    let count = 0;
    for(let i = 0; i< word.length; i++){
      let letter = word[i];
      let hor = Math.abs(currentPos[0] - keys[letter][0]);
      let ver = Math.abs(currentPos[1] - keys[letter][1]);
      currentPos = keys[letter]
      count += hor + ver + 1
    }
    return count
  }