# problem of ES and Commonjs Modules
- you have to include a type in json file to tell the parser that it is a module of commonjs or ESmodule
```json
"type":"module" // for ejs module 
or 
"type":"commonjs" // for commonjs module
```
## method 2
- you can use the extension .mjs for the ESmodule and .cjs for commonjs module to tell the parser that it this particular file is a Ejs or Cjs module
server.mjs 
or serevr.cjs