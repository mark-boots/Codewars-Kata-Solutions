/*
FIXME: Get Full Name

The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.
Notes

The first and/or last names are never null, but may be empty.
Task

Fix the bug so we can all go home early.
*/

class Dinglemouse{ 
    constructor(...a){ this.n = a.join` `.trim() }
    getFullName(){ return this.n }
}
//
function Dinglemouse(...a){
    this.getFullName=_=> a.join` `.trim()
  }

