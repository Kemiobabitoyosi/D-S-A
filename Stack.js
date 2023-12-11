// function : push(to add elements on to a class or new items to the end of an array), pop(to take out elements in a class or take out last element in an array), peek(returns the topmost element in a stack but doesn't delete it), length or size(to retun the number of elements in an array)

var letters = [];
var word = "racecar";
var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; ++i) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; ++i) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
  
}
