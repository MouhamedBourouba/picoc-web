# picoc-web

PicoC interpreter compiled to WebAssembly for running C code in web browsers and Node.js.

## Overview

This project ports [PicoC](https://github.com/jpoirier/picoc) to the web using Emscripten. PicoC is a very small C interpreter originally designed for embedded systems and scripting applications.

## Installation
``` bash
npm i picoc-web
```

## Building
``` bash
git clone https://github.com/MouhamedBourouba/picoc-web
cd picoc-web
npm run build
```
note:
 - Need's emscripten toolchain to be available in your shell


## Usage

```javascript
import {
  RunDefault,
  RunWithInput,
  RunWithOutput,
  RunWithInputOutput,
  RunInteractively,
} from "./Picoc";

// Test 1: RunDefault - Basic hello world
console.log("=== Test 1: RunDefault ===");
const helloCode = `
#include <stdio.h>
int main() {
  printf("hello world \\n");
  return 0;
}`;

const result1 = await RunDefault(helloCode);
console.log("Output:", result1);

// Test 2: RunWithInput - Read user input
console.log("\n=== Test 2: RunWithInput ===");
const inputCode = `
#include <stdio.h>
int main() {
  char name[100];
  printf("Enter name: ");
  scanf("%99[^\\n]", name);
  printf("Hello %s\n", name);
  return 0;
}`;

const result2 = await RunWithInput(inputCode, "Alice");
console.log('Input: "Alice"');
console.log("Output:", result2.stdout);

// Test 3: RunWithOutput - Custom output handler
console.log("\n=== Test 3: RunWithOutput ===");
const countCode = `
#include <stdio.h>
int main() {
  for(int i = 1; i <= 3; i++) {
    printf("Count: %d\n", i);
  }
  return 0;
}`;
`);

console.log(result.stdout); // "Hello, World!"
console.log(result.stderr); // Any error output
```
