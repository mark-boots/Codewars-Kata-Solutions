//[8 kyu] Online RPG: player to qualifying stage?
function playerRankUp (points) {
    let str = 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
    return points >= 100 ? str : false
  }