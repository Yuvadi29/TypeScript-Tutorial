"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
(0, hello_1.default)();
var math_1 = require("./math");
console.log(math_1.pi);
var absPhi = (0, math_1.absolute)(math_1.phi);
console.log(absPhi);
