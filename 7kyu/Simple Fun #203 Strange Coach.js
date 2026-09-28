/*
Simple Fun #203: Strange Coach
https://www.codewars.com/kata/58fd91af13b0012e8e000010/train/javascript

Task
Mirko has been moving up in the world of basketball. He started as a mere spectator, but has already reached the coveted position of the national team coach!

Mirco is now facing a difficult task: selecting five primary players for the upcoming match against Tajikistan. Since Mirko is incredibly lazy, he doesn't bother remembering players' names, let alone their actual skills. That's why he has settled on selecting five players who share the same first letter of their surnames, so that he can remember them easier. If there are no five players sharing the first letter of their surnames, Mirko will simply forfeit the game!

Your task is to find the first letters Mirko's players' surnames can begin with(In alphabetical order), or return "forfeit" if Mirko can't gather a team.

Input/Output
[input] string array players
Array of players' surnames, consisting only of lowercase English letters.

[output] a string
A sorted string of possible first letters, or "forfeit" if it's impossible to gather a team.

Example
For players = ["michael","jordan","lebron","james","kobe","bryant"], the output should be "forfeit".

For

players = ["babic","keksic","boric","bukic",
             "sarmic","balic","kruzic","hrenovkic",
             "beslic","boksic","krafnic","pecivic",
             "klavirkovic","kukumaric","sunkic","kolacic",
             "kovacic","prijestolonasljednikovic"]
the output should be "bk".
*/

function strangeCoach(players) {
  const common_first_letters = players
    .reduce((letters, name) => (letters[name[0]] = (letters[name[0]] || 0) + 1, letters), {})
  
  const possible_teams = Object.entries(common_first_letters)
    .filter(([_, count]) => count >= 5)
    .map(([letter, _]) => letter)
  
  return possible_teams.length > 0 ? possible_teams.sort().join("") : 'forfeit'
}