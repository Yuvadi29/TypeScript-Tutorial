console.log("Generics with Functions: ");
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 15));
console.log("\nGenerics with Classes: ");
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('MyNumber');
value.setValue(57);
console.log(value.toString());
