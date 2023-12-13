// Defining a tuple
let myTuple: [number, boolean, string];
myTuple = [7, true, 'Coding Adda'];

// Try jumbling up the tuple values, you will get an error
// myTuple = [true, 'Coding Adda', 7];
console.log(myTuple);

console.log("Tuples with ReadOnly Keyword");
let myTuple2: [number, boolean, string];

myTuple2 = [10, false, 'Aditya Trivedi'];
// We can use all the stack functions here
myTuple2.push('Not an Admin');
console.log('Before Popping', myTuple2);
myTuple2.pop();
console.log('After Popping', myTuple2);
myTuple2.pop();
console.log('After Popping', myTuple2);



