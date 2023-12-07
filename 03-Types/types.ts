// Number Type
let studentId: number = 123456;
console.log(studentId);

console.log("Number Attributes: ");
console.log("Using toLocalString(): ",studentId.toLocaleString());
console.log("Using toExponential(): ",studentId.toExponential());
console.log("Using toPrecision(): ",studentId.toPrecision());

// Boolean Type
let userisStudent:boolean = false;
console.log(userisStudent);

// Any Type
let avenger;

// This could return anything, if I had used a boolean value, it would have returned me a boolean value. Try running the commented options to get the better understanding of what exactly is `any` used in TypeScript.
function Marvel(){
    // return "Iron Man"
    return true;
};

avenger = Marvel();
console.log(avenger);

