**Classes in TypeScript**
TypeScript adds types and visibility modifiers to JavaScript classes. The members of a class are typed using type annotations, similar to variables.

These class members can be:
**Public** => Allows access to class member from anywhere
**Private** => Only allows access to class member from within class
**Protected** => Allows access to class member from itself and any classes that inherit it.

The `readonly` criteria works here also.

**Inheritance with Implements** 
This can be used to define the type a class must follow through `implements` keyword.

**Inheritance with Extends**
Classes can extend each other through the extends keyword. A class can only extends one other class.

**Override**
When a class extends another class, it can replace members of parent class with same name. 