// SETS
function mySet() {
  // the var collection will hold the set
  var collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1; // indexOf returns -1 if not found, so we use that as a boolean value to
  };
  //   return (collection[element] !== undefined); //just checking if it's there!

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  //   this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  //   this method will remove an element from a set
  this.remove = function (element) {
    //remove is delet in ES6 while size is not a method but a property in ES6
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the collection
  this.size = function () {
    //size is not a methos in ES6 set insteas it is a property
    return collection.length;
  };

  //   this method will return the union of two sets but without duplicates
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  //   this method will return the intersection of two sets as a new set i.e all the items in both sets
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //   this method will return the difference of two sets as a a new set
  this.difference = function (otherSet) {
    var differenceSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet.add(e);
  };

  // this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values()); // will return an iterator instaed of an array
setD.delete("a");
console.log(setD.has("a")); //in ES6 this wouldn't show true or false but would console log the set itself
console.log(setD.has("d")); //in ES6 this wouldn't show true or false but would console log the set itself
