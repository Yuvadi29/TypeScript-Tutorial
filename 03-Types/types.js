// Number Type
var studentId = 123456;
console.log(studentId);
console.log("Number Attributes: ");
console.log("Using toLocalString(): ", studentId.toLocaleString());
console.log("Using toExponential(): ", studentId.toExponential());
console.log("Using toPrecision(): ", studentId.toPrecision());
// Boolean Type
var userisStudent = false;
console.log(userisStudent);
// Any Type
var avenger;
// This could return anything, if I had used a boolean value, it would have returned me a boolean value. Try running the commented options 
function Marvel() {
    // return "Iron Man"
    return true;
}
;
avenger = Marvel();
console.log(avenger);
