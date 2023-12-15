class Person {
    name: string;
    age: number;
}

const person = new Person();
person.name = "Aditya";
person.age = 21;

console.log(person);

console.log("Classes Visibility");
class newPerson {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const newperson = new newPerson("Harikrishnan");
// can't get newperson.name as class is private
console.log(newperson.getName());

console.log("Inheritance using Implements");
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }
}

const myShape = new Rectangle(20, 20);
console.log(myShape.getArea());


console.log("Inheritance using Extends");
interface Shape {
    getArea: () => number;
}

class newRectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square extends newRectangle {
    public constructor(width: number) {
        super(width, width);
    }

    // getArea gets inherited from Rectangle
}

const mySq = new Square(15);

console.log(mySq.getArea());


console.log("Overrides");

interface Shape {
    getArea: () => number;
}

class myRectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class newSquare extends myRectangle {
    public constructor(width1: number) {
        super(width1, width1);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

const mySquare = new newSquare(20);

console.log(mySquare.toString());


