//[8 kyu] Playing with cubes II
class Cube{
    constructor(n=0){
      this.setSide(n);
    }
    setSide(n=0){
      this.side = Math.abs(n);
    }
    getSide(){
      return this.side
    }
  }