//[8 kyu] Smallest unused ID
const nextId = ids => {
    ids = [...new Set(ids)].sort((a,b)=>a-b)
    if(ids[0] !== 0) return 0;
    for(let i = 0; i<ids.length; i++){
      if(ids[i] +1 !== ids[i+1]) return ids[i]+1
    }
    return ids.length
  }