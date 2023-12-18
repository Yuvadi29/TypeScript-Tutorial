**Modules in TypeScript**
Modules are basically files or group of files which are used to enhance the code usability and reduce the code repetition in applications. There are 3 main things to consider when writing module-based code in TypeScript:

**=> Syntax:** What syntax do I want to use to import and export things?
**=> Module Resolution:** Relationship between modules names and files on disk
**=> Module Output Target:** What should my emitted JS module lok like

##### ES Module Syntax:
```bash
    # @filename: hello.ts
    export default function hello(){
        console.log("Hello  There");
    }

    #Importing it
    import hello from "./hello.js";
    hello();
```

In addition to default export, you can have more than one export of variables and functions via `export` by omitting `default`;

##### TypeScript Specefic ES Module Syntax
Types can be exported and imported using same syntax as JavaScript values:
