function decodeMessage(string,notCode){
    return string.replace(new RegExp(notCode.join("|"),"gi"),"")
}

console.log(decodeMessage("I anotm tbaconhe walrus.", ["not", "bacon"]))
//I am the walrus.

console.log(decodeMessage("summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!",["summer","bacon","scary","intergalactic","jerry","morty","beth","family"]))
//look at me, I'm Pickle Rick!

