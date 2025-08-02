//[7 kyu] Refactored Greeting
class Person {
    constructor(name) {
      this.name = name;
    }
    greet(name){
      return `Hello ${name}, my name is ${this.name}`
    }
    name(){
      return this.name;
    }
  }
  