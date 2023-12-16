console.log("Casting with as");
// Here we are initialising x as unknown variable, then printed it where we defined x as string.
console.log("Casting Unknown to String");
let x: unknown = 'hello';
console.log((x as string).length);

console.log("Casting Unknown to Number");
let y: unknown = "45";
console.log((y as number));


console.log("Casting with <>");
let z: unknown = "Aditya";
console.log((<string>z).length);


console.log("Force Casting");
let c = "Coding";
console.log(((c as unknown) as string).length);




