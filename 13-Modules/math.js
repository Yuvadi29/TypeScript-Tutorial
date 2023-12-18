"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absolute = exports.randomGenerator = exports.phi = exports.square = exports.pi = void 0;
exports.pi = 3.14;
exports.square = 5;
exports.phi = 1.67;
var randomGenerator = /** @class */ (function () {
    function randomGenerator() {
    }
    return randomGenerator;
}());
exports.randomGenerator = randomGenerator;
function absolute(num) {
    if (num < 0)
        return num * -1;
    return num;
}
exports.absolute = absolute;
