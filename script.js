//This is a sample Set

// Create a set object
let set = new Set();

// Create some elements to use
let Ivan = { name: "Ivan" };
let Will = { name: "Will" };
let Ben = { name: "Ben" };

// Add some elements to our set with add function
set.add(Ivan);
set.add(Ivan);
set.add(Will);
set.add(Ben);
set.add(Will);

// Note that set keeps only unique values
console.log( set.size ); // prints out 3

// Check if a value exists in the Set
console.log(mySet.has("Ivan")); // Output: true
console.log(mySet.has("Tom")); // Output: false

// Iterate over the values in the Set
mySet.forEach(function(value) {
  console.log(value);
});

// Output:
// Ivan
// Will
// Ben