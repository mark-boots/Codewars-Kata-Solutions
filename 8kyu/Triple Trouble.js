//[8 kyu] Triple Trouble
function tripleTrouble(one, two, three){
    return [...one].map((c,i)=>c+two[i]+three[i]).join('')
   }