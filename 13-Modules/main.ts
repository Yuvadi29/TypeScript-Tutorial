import hello from "./hello";
hello();

import { phi, pi, absolute } from "./math";
console.log(pi);

const absPhi = absolute(phi);
console.log(absPhi);

import { Car, Bike } from "./car";
type Vehicles = Car | Bike;



