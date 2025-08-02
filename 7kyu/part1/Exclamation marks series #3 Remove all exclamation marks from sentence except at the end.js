//[7 kyu] Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
const remove = s => s.split('!').join('') + (s.match(/!+$/) || []).join('')