//[7 kyu] Computer problem series #1: Fill the Hard Disk Drive
function save(sizes, hd) {
    let size = 0;
    for(let i = 0; i<sizes.length;i++){
      size += sizes[i];
      if(size > hd ) return i
    }
    return sizes.length;
  }