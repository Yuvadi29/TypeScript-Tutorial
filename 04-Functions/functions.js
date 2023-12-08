function addNumbers(num) {
    return num + 2;
}
console.log("Without Defining Type:");
console.log(addNumbers(5));
// Fix is really is, just add the type infront of it
function addNum(num) {
    return num + 2;
}
console.log("Defining Type:");
console.log(addNum(9));
