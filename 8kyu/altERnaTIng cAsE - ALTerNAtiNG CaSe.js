//[8 kyu] altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
    return this.split("").map(c => c === c.toUpperCase()? c.toLowerCase(): c.toUpperCase()).join('');
  }