//[8 kyu] Will there be enough space?
const enough = (cap, on, wait) => cap-on >= wait ? 0 : wait-cap+on