//[8 kyu] Finish Guess the Number Game
class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    guess(n) {
      if(this.lives == 0) return error();
      if(n == this.number){
        return true
      } else {
        this.lives -= 1;
        return false
      }
    }
  }