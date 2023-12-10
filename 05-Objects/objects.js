// Anonymous objects
var greet = function (person) {
    return "Hello " + person.name;
};
console.log(greet({ name: "Aditya", age: 21 }));
function greetbyInterface(person) {
    return "Hello again: " + person.name;
}
console.log("Using Interface: ", greetbyInterface({ name: "Harikrishnan", age: 22 }));
function greetbyAlias(person) {
    return "Hello again: " + person.name;
}
console.log("Using Interface: ", greetbyAlias({ name: "Coding Adda", age: 2 }));
// Indexed Signatures
var nameAgeCar = {};
nameAgeCar.Aditya = 2050;
nameAgeCar.Harikrishnan = "One";
console.log(nameAgeCar);
