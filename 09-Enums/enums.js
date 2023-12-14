// Numeric Enums which are by default
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["Aditya"] = 0] = "Aditya";
    MyEnum[MyEnum["Trivedi"] = 1] = "Trivedi";
    MyEnum[MyEnum["Coding"] = 2] = "Coding";
    MyEnum[MyEnum["Adda"] = 3] = "Adda";
})(MyEnum || (MyEnum = {}));
var adityaProfile = MyEnum.Aditya;
// This returns the first value as 0. It can be said that it is same as that we do in array. Like taking the index value of an element.
console.log("At Position 0");
console.log(adityaProfile);
adityaProfile = MyEnum.Coding;
console.log("At Position 2");
console.log(adityaProfile);
// Using Initialised Enums
var MyNewEnum;
(function (MyNewEnum) {
    MyNewEnum[MyNewEnum["Subscribe"] = 1] = "Subscribe";
    MyNewEnum[MyNewEnum["To"] = 2] = "To";
    MyNewEnum[MyNewEnum["Coding"] = 3] = "Coding";
    MyNewEnum[MyNewEnum["Adda"] = 4] = "Adda";
})(MyNewEnum || (MyNewEnum = {}));
console.log("Giving Initialised Enum values");
console.log(MyNewEnum.Subscribe);
console.log(MyNewEnum.Adda);
// Initailised all values
var MyNewNewEnum;
(function (MyNewNewEnum) {
    MyNewNewEnum[MyNewNewEnum["Success"] = 200] = "Success";
    MyNewNewEnum[MyNewNewEnum["NotFound"] = 404] = "NotFound";
    MyNewNewEnum[MyNewNewEnum["ServerError"] = 500] = "ServerError";
    MyNewNewEnum[MyNewNewEnum["Accepted"] = 202] = "Accepted";
})(MyNewNewEnum || (MyNewNewEnum = {}));
console.log("Initialised all values to each enum value");
console.log(MyNewNewEnum.Accepted);
console.log(MyNewNewEnum.Success);
// String Enums
var MyNewStringEnum;
(function (MyNewStringEnum) {
    MyNewStringEnum["name"] = "Aditya";
    MyNewStringEnum["youtubeChannel"] = "Coding Adda";
    MyNewStringEnum["year"] = "Final Year";
    MyNewStringEnum["college"] = "VCET";
})(MyNewStringEnum || (MyNewStringEnum = {}));
console.log("String ENUMS");
console.log(MyNewStringEnum.name);
console.log(MyNewStringEnum.youtubeChannel);
console.log(MyNewStringEnum.year);
