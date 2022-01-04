//[8 kyu] Get Planet Name By ID
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
const getPlanetName = id => planets[id-1] || undefined