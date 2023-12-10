// Anonymous objects
const greet = (person: { name: string, age: number }) => {
    return "Hello " + person.name;
}
console.log(greet({ name: "Aditya", age: 21 }));

// # Using Interface
interface PersonInterface {
    name: string;
    age: number;
}

function greetbyInterface(person: PersonInterface) {
    return "Hello again: " + person.name;
}
console.log("Using Interface: ", greetbyInterface({ name: "Harikrishnan", age: 22 }));


// # Using Alias 
type PersonAlias = {
    name: string;
    age: number;
}

function greetbyAlias(person: PersonAlias) {
    return "Hello again: " + person.name;
}
console.log("Using Interface: ", greetbyAlias({ name: "Coding Adda", age: 2 }));


// Indexed Signatures
const nameAgeCar: {[index: string]: number} = {};

nameAgeCar.Aditya = 2050;
nameAgeCar.Harikrishnan = "One";
console.log(nameAgeCar);
