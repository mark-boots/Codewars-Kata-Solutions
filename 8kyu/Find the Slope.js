//[8 kyu] Find the Slope
function slope(points){
    const [x1,y1,x2,y2] = [...points] 
    return x1 == x2 ? 'undefined' : String((y2 - y1) / (x2 - x1))
  }