//[8 kyu] Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
    let input = s;
    while (n) {
      input = input.replace(/!/, "");
      n-=1;
    }
    return input;
  }