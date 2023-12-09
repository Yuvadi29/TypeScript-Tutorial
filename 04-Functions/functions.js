// Not defining the type will give us `any` type by default.
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
// Better way to write functions 
console.log("Better way to write functins:");
function addNumFunc(num) {
    return num + 2;
    // return "Hello World";
}
console.log(addNumFunc(10));
var CodeString = ["C", "Cpp", "JavaScript", "Python"];
var codeStringMapped = CodeString.map(function (code) {
    return "Languages are ".concat(code);
});
console.log(codeStringMapped);
var CodesNum = [1, 2, 3, 4];
var codeNumMapped = CodesNum.map(function (code) {
    return "Languages are ".concat(code);
});
console.log(codeNumMapped);
