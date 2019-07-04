// Challenge 1 - research the following methods:

// Shift () - This removes an item from the front of an Array
/*
var names = ["Chloe", "Megan", "Ethan"]
var first = names.shift()
console.log(names)


// Unshift() - Used to add to the front of an array

var names = ["Chloe", "Megan", "Ethan"];
names.unshift("Steve");
console.log(names);

// Splice () - Changes the contents of an array by removing or replacing existing elements and/or adding new elememts

var names = ["Chloe", "Megan", "Ethan"];
names.splice(0,3, "Ethan")
console.log(names)

// Slice ()

var names = ["Chloe", "Megan", "Ethan"];
console.log(names.slice(1));
console.log(names.slice(2));


// Difference between Array[] and Array ()
// If you return only one value in an Array (x) it will return 'x' about on undefined objects
*/

// .map() - Will create a new array with the results of calling a provided function on every element in the calling array 

let testScores = [22, 59, 75, 64, 32]
let newScores = testScores.map(x => x*2)
console.log(newScores)

let hotDrinks = ["coffee", "tea", "juice"]
let coldDrinks = hotDrinks.map(x => "iced "+x)
console.log(coldDrinks)

let people = [
{firstName: "Chloe", lastName: "Lane"},
{firstName: "Megan", lastName: "Lee"},
{firstName: "Ethan", lastName: "Johnson"},
]
let fullName = people.map(people => `${people.firstName} ${people.lastName}`);
console.log(fullName);

