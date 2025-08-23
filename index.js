import PicoModule from "./picoc.js";

export async function RunC(sourceCode) {
  let result = {
    stdout: "",
    stderr: "",
  };

  let picoc = await PicoModule({
    print: (txt) => {
      result.stdout = `${result.stdout}${txt}\n`;
    },
    printErr: (txt) => {
      result.stderr = `${result.stderr}${txt}\n`;
    },
  });

  picoc.FS.writeFile("/file.c", sourceCode);

  picoc.callMain(["file.c"]);

  return result;
}

export default RunC;
