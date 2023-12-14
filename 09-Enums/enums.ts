// Numeric Enums which are by default
enum MyEnum {
    Aditya,
    Trivedi,
    Coding,
    Adda
}

let adityaProfile = MyEnum.Aditya;
// This returns the first value as 0. It can be said that it is same as that we do in array. Like taking the index value of an element.
console.log("At Position 0");
console.log(adityaProfile);

adityaProfile = MyEnum.Coding;
console.log("At Position 2");
console.log(adityaProfile);

// Using Initialised Enums
enum MyNewEnum {
    Subscribe = 1,
    To,
    Coding,
    Adda
}

console.log("Giving Initialised Enum values");
console.log(MyNewEnum.Subscribe);
console.log(MyNewEnum.Adda);

// Initailised all values
enum MyNewNewEnum {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
    Accepted = 202
}

console.log("Initialised all values to each enum value");
console.log(MyNewNewEnum.Accepted);
console.log(MyNewNewEnum.Success);

// String Enums
enum MyNewStringEnum {
    name = "Aditya",
    youtubeChannel = "Coding Adda",
    year = "Final Year",
    college = "VCET"
}

console.log("String ENUMS");
console.log(MyNewStringEnum.name);
console.log(MyNewStringEnum.youtubeChannel);
console.log(MyNewStringEnum.year);



