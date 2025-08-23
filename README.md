# picoc-web

PicoC interpreter compiled to WebAssembly for running C code in web browsers and Node.js.

## Overview

This project ports [PicoC](https://github.com/jpoirier/picoc) to the web using Emscripten. PicoC is a very small C interpreter originally designed for embedded systems and scripting applications.

## Usage

```javascript
import RunC from 'picoc-web';

// Simple Hello World
const result = await RunC(`
#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}
`);

console.log(result.stdout); // "Hello, World!"
console.log(result.stderr); // Any error output
```
