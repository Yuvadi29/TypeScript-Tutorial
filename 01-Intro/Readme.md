TypeScript is a typed programming language that builds on top of JavaScript which inturn gives us a better tooling at any scale. It is more secure than JavaScript but has some additional concepts other than JavaScript.

**How to Install TypeScript** 
```bash 
    npm install -g typescript
```
**Check if TypeScript is installed**
```bash
    tsc -v
```

=> Files in TypeScript are of the format .ts just like the way we have the .js format for JavaScript files.
```.tsx``` is used at a component level.

=>TypeScript cannot be executed directly, it needs to be converted into JavaScript first. So after writing the TypeScript code, we have to execute the following command:

**Enter the following command to execute a TypeScript Code:**
```bash
    tsc {filename.ts}
```
This will create a new JavaScript file with the same syntax as we saw in TypeScript. Now just execute the JavaScript file by using ```bash node {filename.js}```