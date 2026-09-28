/*
Rock Paper Scissors Lizard Spock
https://www.codewars.com/kata/57d29ccda56edb4187000052

Rock-Paper-Scissors Big Bang Style

According to Sheldon Cooper the following is true:

    Scissors cuts Paper
    Paper covers Rock
    Rock crushes Lizard
    Lizard poisons Spock
    Spock smashes Scissors
    Scissors decapitates Lizard
    Lizard eats Paper
    Paper disproves Spock
    Spock vaporizes Rock
    ( and as it always has ) Rock crushes Scissors

Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".

Values will be given as one of "rock", "spock", "paper", "lizard", "scissors".

*/

const wins = {
    scissors: ['paper'   , 'lizard'  ],
    paper:    ['rock'    , 'spock'   ],
    rock:     ['lizard'  , 'scissors'],
    lizard:   ['spock'   , 'paper'   ],
    spock:    ['scissors', 'rock'    ]
}
 
const rpsls = (pl1,pl2) => pl1 == pl2 ? 'Draw!' : `Player ${!wins[pl1].includes(pl2)+1} Won!`