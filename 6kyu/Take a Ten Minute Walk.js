//[6 kyu] Take a Ten Minute Walk
function isValidWalk(walk) {
    return (
      walk.length == 10 &&
      walk.filter((d) => d === "n").length == walk.filter((d) => d === "s").length &&
      walk.filter((d) => d === "e").length == walk.filter((d) => d === "w").length
    );
  }
  