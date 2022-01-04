//[8 kyu] Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => {
    return Object.values(gunners).filter(v => v=="nay").length > 0 ? 'Shiver me timbers!' : 'Fire!'
 }
 