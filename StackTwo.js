// Creates a stack
var Stack = function () {
  this.count = 0; // will keep track of how many items are in the stack
  this.storage = {}; // is an empty object

  // Adds a value onto the end of the stack
  this.push = function (value) {
    //will add a value to the end of the stack
    this.storage[this.count] = value; // adds value on top of a stack at the index this.count
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // returns the value at the end of the stack
  this.peek = function () {
    //when you are peeking you don't need to pass a avalue
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

