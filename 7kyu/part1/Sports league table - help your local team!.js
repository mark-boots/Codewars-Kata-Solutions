/*
Sports league table - help your local team!
https://www.codewars.com/kata/566fd169d39cf89e1e000044/train/javascript

League details
The possible results in the league are "draw" and "win" with 3 points for a win and 1 point each for a draw.

The league table is stored in order from top to bottom in a 2-D array called leagueTable (Javascript) / $league_table (Ruby) / league_table (Python) with each element containing the team name, and the number of points that team has. For example:

[["teamC", 6], ["teamA", 4], ["teamB", 4], ["teamD", 3]]
Function specification
Write a function which takes three parameters: first team's name, second team's name, and the result of the match (in Python version the league_table will be passed as an additional argument). The function must add the correct points to teams 1 and 2 based on the result of the match, and reorder the array based on new the league positions. League positions should be based first on the number of points then if points are equal, alphabetically. The function must also return the updated league table.

*/

function leagueCalculate(team1, team2, result) {
    
  let teamMap = new Map(leagueTable);
  
  if (result === "win") {
    teamMap.set(team1, teamMap.get(team1) + 3);
  } else if (result === "draw") {
    teamMap.set(team1, teamMap.get(team1) + 1);
    teamMap.set(team2, teamMap.get(team2) + 1);
  }
  
  leagueTable = Array.from(teamMap).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  return leagueTable;
}