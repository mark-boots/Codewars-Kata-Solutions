//[7 kyu] Search for letters
const change = string => [...'abcdefghijklmnopqrstuvwxyz'].map((v,i)=>[...string.toLowerCase()].includes(v)? 1: 0).join('')