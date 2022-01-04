//[8 kyu] Lexical this
const Person = () => {
    const person = {
      _name: 'Leroy',
      _friends: [],
      fillFriends: function(f) {
        this._friends.push(...f)
      },
    }
    return person
  }