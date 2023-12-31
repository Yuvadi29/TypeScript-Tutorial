**Project Setup**
We Start the project by creating a new folder to be used here which is the Server folder.
```bash
    mkdir server
    cd server
    npm init -y //Initialise application
```

It will create a package.json file which will be center for all the packages.

**Install the neccessary dependencies**
We install `express`,`nodemon` ,`mongoose`, `joi`, `mongodb`, `dotenv` as the dependencies using:
```bash
    npm install express nodemon mongoose joi mongodb dotenv
```

Next we install TypeScript as a dev dependency along with types for packages installed.
```bash
    npm install typescript ts-node @types/node @types/express --save-dev
```

Now to use TypeScript as application, we have to initialise it. For that we need to create a `tsconfig.json` file where we can customize compiler options. We do this by:

```bash
    npx tsc --init
```

The tsconfig.json file contains a lot of compiler options, most of which have been commented. Nevertheless, it can be customized to fit the specific needs of your application. Some of these options used in the config are very important which include:

**target**: Allows us to specify the target JavaScript version that the compiler will output.

**module**: Specify what module code is generated in the JavaScript code. CommonJS is supported and is a standard in Node.js

**strict**: An option that enables strict type-checking options

**esModuleInterop**: Allows us to compile ES6 modules to CommonJS modules

**skipLibCheck**: If set to true, skips type-checking of default library declaration files

**forceConsistentCasingInFileNames**: When set to true, enables case-sensitive file naming