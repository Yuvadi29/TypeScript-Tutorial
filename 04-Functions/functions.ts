// Not defining the type will give us `any` type by default.
function addNumbers(num){
    return num + 2;
}
console.log("Without Defining Type:");
console.log(addNumbers(5));

// Fix is really is, just add the type infront of it
function addNum(num: number){
    return num + 2;
}
console.log("Defining Type:");
console.log(addNum(9));
