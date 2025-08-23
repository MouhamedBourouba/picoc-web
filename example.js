import RunC from "./index.js";

// Simple Hello World
const result = await RunC(`
#include <stdio.h>
  int main() {
  printf("Hello, World!\\nHello, World!\\n");
  printf("Hello, World!\\n");
  printf("Hello, World!\\n");
  printf("Hello, World!\\n");
  return 0;
  }
  `);

console.log(result.stdout); // "Hello, World!"
console.log(result.stderr); // Any error output
