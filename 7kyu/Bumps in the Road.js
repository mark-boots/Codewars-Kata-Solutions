//[7 kyu] Bumps in the Road
const bump = x => (x.match(/n/g)||[]).length > 15 ? 'Car Dead' : 'Woohoo!'