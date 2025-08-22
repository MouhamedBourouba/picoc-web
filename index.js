import { log } from "console";
import PicoModule from "./picoc.js";

function RunC(sourceCode) {
  PicoModule().then((picoc) => {
    picoc.FS.writeFile("./file.c", sourceCode);

    const args = ["file.c"];
    picoc.callMain(args);
  });
}

let code = `
#include<stdio.h>
int main() {
printf("hello form js nigga");
return 0;
}
`;

RunC(code);
