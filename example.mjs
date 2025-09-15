import {
  RunDefault,
  RunWithInput,
  RunWithOutput,
  RunWithInputOutput,
  RunInteractively,
} from "./index.mjs";

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

await RunWithOutput(countCode, (output) => {
  console.log("Custom handler got:", output);
});

// Test 4: RunWithInputOutput - Input + custom output
console.log("\n=== Test 4: RunWithInputOutput ===");
const echoCode = `
#include <stdio.h>
int main() {
  char msg[50];
  printf("Type something: \n");
  scanf("%49s", msg);
  printf("You typed: %s\n", msg);
  return 0;
}`;

await RunWithInputOutput(echoCode, "Hello", (output) => {
  console.log("Echo output:", output);
});

// Test 5: RunInteractively - Character by character
console.log("\n=== Test 5: RunInteractively ===");
const charCode = `
#include <stdio.h>
int main() {
  char c = getchar();
  printf("First char: %c\\n", c);
  return 0;
}`;

let inputIndex = 0;
const input = "A";

await RunInteractively(
  charCode,
  () => (inputIndex < input.length ? input.charCodeAt(inputIndex++) : null),
  (output) => console.log("Interactive:", output),
);

console.log("\nAll tests done!");
