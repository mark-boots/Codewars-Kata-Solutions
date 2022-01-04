//[7 kyu] Partial Word Searching
function wordSearch(query, seq){
    const res = seq.filter(v => v.toLowerCase().includes(query.toLowerCase()))
    return res.length > 0 ? res : ['Empty']
  }