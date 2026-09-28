//[7 kyu] The wheat/rice and chessboard problem
function squaresNeeded(grains){
    if(grains == 0) return 0;
    total = 0;
    square = 1;
    while(total < grains){
      squareGrains = 2 ** (square - 1);
      total+= squareGrains;
      square += 1
    }
    return square-1
  }