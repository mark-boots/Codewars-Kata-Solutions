//[7 kyu] Alan Partridge I - Partridge Watch
const lookup = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
function part(x){
  let found = '';
  for(let i = 0; i < x.length; i++){
    if(lookup.includes(x[i])) found+='!'
  }
  return found.length > 0 ? `Mine\'s a Pint${found}` : "Lynn, I've pierced my foot on a spike!!";
}