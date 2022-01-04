//[8 kyu] 
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return [...arguments].join('|') == 'Santa Claus|Ho Ho Ho!'
};