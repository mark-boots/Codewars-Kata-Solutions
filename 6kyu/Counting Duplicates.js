//[6 kyu] Counting Duplicates
function duplicateCount(text) {
    let unique = [...new Set([...text.toLowerCase()])];
    let count = 0;
    unique.forEach((u) => {
      if (text.match(new RegExp(u, "gi")).length > 1) count++;
    });
    return count;
  }