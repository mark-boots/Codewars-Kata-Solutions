//[8 kyu] Grasshopper - Personalized Message
function greet (name, owner) {
    return 'Hello '+ (name === owner ? 'boss' : 'guest')
  }