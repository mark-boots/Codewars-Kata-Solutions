/*
Lost Lineup
https://www.codewars.com/kata/6914c975e159c8f7e120cc84/train/javascript

Developers were lined up at the coffee machine, but it broke! By the time they got to the backup one, they couldn't remember where people had been in the line. They want to restore the original order. The team lead, Carrol, was first. Everyone else remembers how many people had been standing between them and Carrol. Can you help them reconstruct the original order?

Input: A list or array of n non-negative integers. Element i is the number of people that person i remembers being between them and Carrol.

Output: A list or array of n non-negative integers, representing the original order. Since Carrol is first, there's no need for her to be included in the output.

Example: Suppose input is [1, 2, 0]. This means there was one person between person 1 and Carrol, two people between person 2 and Carrol, and no people between person 3 and Carrol. Therefore the original order, excluding Carrol, must have been [3, 1, 2].

Note: Since memories are fallible, people might misremember the number of people between them and Carrol. In this case there might be no solution, so return [ ].

Example: Suppose input is [1, 0, 1]. Clearly it can't be the case that both person 1 and person 3 had one person between them and Carrol.

Constraints: 1 ≤ n ≤ 100.

Source: This kata is a modification of this problem from the practice competition of the International Collegiate Programming Competition, North America North Central region, 2025.

*/

function findLineup(distances) {
  const n = distances.length;
  if (new Set(distances).size !== n || distances.some(d => d < 0 || d >= n)) return [];
  return distances.map((d, i) => [d, i + 1]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
}

findLineup=d=>new Set(d).size<d.length||d.some(v=>v<0||v>=d.length)?[]:d.map((d,i)=>[d,i+1]).sort((a,b)=>a[0]-b[0]).map(x=>x[1])

findLineup=d=>new Set(d).size<d.length||d.some(x=>x<0||x>=d.length)?[]:d.map((_,i)=>i+1).sort((a,b)=>d[a-1]-d[b-1])


findLineup=(a,r=a.map((_,i)=>a.indexOf(i)+1))=>r.includes(0)?[]:r