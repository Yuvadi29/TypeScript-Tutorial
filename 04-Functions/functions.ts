// Not defining the type will give us `any` type by default.
function addNumbers(num) {
    return num + 2;
}
console.log("Without Defining Type:");
console.log(addNumbers(5));

// Fix is really is, just add the type infront of it
function addNum(num: number) {
    return num + 2;
}
console.log("Defining Type:");
console.log(addNum(9));


// Better way to write functions 
console.log("Better way to write functins:");
function addNumFunc(num: number): number {
    return num + 2;
    // return "Hello World";
}
console.log(addNumFunc(10));

const CodeString = ["C", "Cpp", "JavaScript", "Python"];

let codeStringMapped = CodeString.map(code => {
    return `Languages are ${code}`
});
console.log(codeStringMapped);


const CodesNum = [1, 2, 3, 4];
let codeNumMapped = CodesNum.map(code => {
    return `Languages are ${code}`
});
console.log(codeNumMapped);
