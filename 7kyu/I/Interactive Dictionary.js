//[7 kyu] Interactive Dictionary
class Dictionary {
    constructor() {
      this.dictionary = new Map()
    }
    newEntry(key, value) {
      this.dictionary.set(key, value)
    }
    look(key) {
      return this.dictionary.has(key) ? this.dictionary.get(key) : `Can't find entry for ${key}`
    }
  }