//[7 kyu] Find Screen Size
function findScreenHeight(width, ratio) {
    const [ratioW,ratioH] = ratio.split(":");
    return `${width}x${width/ratioW*ratioH}`
  }