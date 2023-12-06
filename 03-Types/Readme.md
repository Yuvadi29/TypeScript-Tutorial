JavaScript has 3 very commonly used primitives: `string`, `number` and `boolean`. It does not have special runtime value for integers, so there is no equivalent to `int` or `float`.


When you define a type as a number, you can directly get access to the defined functions which can be used for a type `number`. I have implemented some of the functions, you can try out the other functions on your own. Remember to run `tsc {filename.ts}` and then `node {filename.ts}` everytime you update your code.

**Type Inference**:
It is a methodology which TypeScript uses. Like for example, while defining a number if we use this:
```bash
    let myNumber = 123456
```
instead of this:
```bash
    let myNumber: number = 123456
```
Here TypeScript will automatically use type inference and understand it that this is actually a number that the user is trying to define.