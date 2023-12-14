**Enums In TypeScript**
Enums are special class that represents a group of constants. They come in 2 flavors: `string` and `numeric`. By default they will initialise first value to 0 and add 1 to each additional value. Syntax is:
```bash
    enum {enumName}{
        value1,
        value2,
        ...
    }
``` 

We can also set the first numeric value and make them autoincrement from it.
```bash
    enum {enumName}{
        value1 = 1,
        value2,
        ...
    }
```

We can also set the numeric values to all of them 
```bash
    enum {enumName}{
        value1 = 1,
        value2 = 10,
        value3 = 100,
        ...
    }
```

String enums can also contain string. 
```bash
    enum {enumName}{
        value1 = "Aditya",
        value2 = "Coding Adda",
        value3 = "Youtube",
        ...
    }
```