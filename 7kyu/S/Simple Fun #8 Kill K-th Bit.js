//[7 kyu] Simple Fun #8: Kill K-th Bit
function killKthBit(n, k) {
    bits = [...n.toString(2)]
    bits[bits.length-k] = 0;
    return parseInt(bits.join(''),2)
  }
  