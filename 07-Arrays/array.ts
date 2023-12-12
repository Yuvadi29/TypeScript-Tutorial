// Defining an array
const cars: string[] = [];
// Adding elements using push
cars.push("BMW");
cars.push("Mercedes");
cars.push("Ferrari");
cars.push("Pagani");
cars.push("Lamborghini");

console.log(cars);

// Using readonly
const bikes: readonly string[] = ["1000RR"];
// Can't add push as when we use readonly keyword, push property does not exist
// bikes.push("ZMR");
console.log(bikes);
