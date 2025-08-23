import PicoModule from "./picoc.js";

export async function RunC(sourceCode) {
  let result = {
    stdout: "",
    stderr: "",
  };

  let picoc = await PicoModule({
    print: (txt) => (result.stdout += txt),
    printErr: (txt) => (result.stderr += txt),
  });

  picoc.FS.writeFile("/file.c", sourceCode);

  picoc.callMain(["file.c"]);

  return result;
}

export default RunC;
