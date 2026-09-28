//[7 kyu] Sort the Bytes
function sortBytes(uint32) {
    bytes = (uint32 >>> 0).toString(2).padStart(32, '0').match(/.{1,8}/g)
    return parseInt(bytes.sort((a,b)=>Number(b) - Number(a)).join(''),2)
  }