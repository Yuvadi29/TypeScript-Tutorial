var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = "Aditya";
person.age = 21;
console.log(person);
console.log("Classes Visibility");
var newPerson = /** @class */ (function () {
    function newPerson(name) {
        this.name = name;
    }
    newPerson.prototype.getName = function () {
        return this.name;
    };
    return newPerson;
}());
var newperson = new newPerson("Harikrishnan");
// can't get newperson.name as class is private
console.log(newperson.getName());
console.log("Inheritance using Implements");
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myShape = new Rectangle(20, 20);
console.log(myShape.getArea());
console.log("Inheritance using Extends");
var newRectangle = /** @class */ (function () {
    function newRectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    newRectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return newRectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(newRectangle));
var mySq = new Square(15);
console.log(mySq.getArea());
console.log("Overrides");
var myRectangle = /** @class */ (function () {
    // using protected for these members allows access from classes that extend from this class, such as Square
    function myRectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    myRectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    myRectangle.prototype.toString = function () {
        return "Rectangle[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return myRectangle;
}());
var newSquare = /** @class */ (function (_super) {
    __extends(newSquare, _super);
    function newSquare(width1) {
        return _super.call(this, width1, width1) || this;
    }
    // this toString replaces the toString from Rectangle
    newSquare.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return newSquare;
}(myRectangle));
var mySquare = new newSquare(20);
console.log(mySquare.toString());
// Square[width = 20]
