//[7 kyu] Easy wallpaper
const wallpaper = (l, w, h) => [l,w,h].includes(0) ? numbers[0] : numbers[Math.ceil((l+w)*2*h*1.15 / 5.2)]