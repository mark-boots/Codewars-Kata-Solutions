
//[7 kyu] Which section did you scroll to?
function getSectionIdFromScroll(scrollY,sizes){
    let currPos = 0;
     for(let i = 0; i < sizes.length; i++){
       currPos+=sizes[i];
       if(scrollY >= currPos) continue;
       return i;
     }
    return -1;
  }
  