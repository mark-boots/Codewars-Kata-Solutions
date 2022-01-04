//[7 kyu] Kooka-Counter
const kookaCounter = laughing => {
    let count = 0;
    let curr = ''
    for(let i = 0; i < laughing.length; i += 2){
      laughing[i] !== curr ? count++ : '';
      curr = laughing[i];
    }
    return count;
  }