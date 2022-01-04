//[8 kyu] For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
const quote = fighter => {
    let t = {
      'george saint pierre': 'I am not impressed by your performance.', 
      'conor mcgregor':'I\'d like to take this chance to apologize.. To absolutely NOBODY!'
    }
    return t[fighter.toLowerCase()]
  }