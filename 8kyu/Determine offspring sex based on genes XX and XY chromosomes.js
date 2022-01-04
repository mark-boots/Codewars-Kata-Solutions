//[8 kyu] Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
    let child = "daughter"
    if(sperm.endsWith("Y")) child= "son"
    return `Congratulations! You're going to have a ${child}.`
  }