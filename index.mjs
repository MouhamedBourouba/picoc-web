import PicoModule from "./picoc.mjs";

/**
 * Compiles and runs C source code using PicoModule.
 *
 * @param {string} sourceCode
 * @returns {Promise<{stdout: string, stderr: string}>}
 */
export async function RunDefault(sourceCode) {
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

/**
 * @param {string} sourceCode
 * @param {string} inputBuffer
 * @returns {Promise<{stdout: string, stderr: string}>}
 * */
export async function RunWithInput(sourceCode, inputBuffer) {
  let inputBufferIndex = 0;

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

    stdin: function () {
      if (inputBufferIndex < inputBuffer.length) {
        var charCode = inputBuffer.charCodeAt(inputBufferIndex);
        inputBufferIndex++;
        return charCode;
      } else {
        return null;
      }
    },
  });

  picoc.FS.writeFile("/file.c", sourceCode);
  picoc.callMain(["file.c"]);

  return result;
}

/**
 * @param {string} sourceCode
 * @param {(value: string) => void} outputFn
 * @returns {Promise<{stdout: string, stderr: string}>}
 * */
export async function RunWithOutput(sourceCode, outputFn) {
  let picoc = await PicoModule({
    print: outputFn,
    printErr: outputFn,
  });

  picoc.FS.writeFile("/file.c", sourceCode);
  picoc.callMain(["file.c"]);
}

/**
 * @param {string} sourceCode
 * @param {string} inputString
 * @param {(value: string) => void} outputFn
 * */
export async function RunWithInputOutput(sourceCode, inputString, outputFn) {
  let inputBufferIndex = 0;

  let picoc = await PicoModule({
    print: outputFn,
    printErr: outputFn,

    stdin: function () {
      if (inputBufferIndex < inputString.length) {
        var charCode = inputString.charCodeAt(inputBufferIndex);
        inputBufferIndex++;
        return charCode;
      } else {
        return null;
      }
    },
  });

  picoc.FS.writeFile("/file.c", sourceCode);
  picoc.callMain(["file.c"]);
}

/**
 * @param {string} sourceCode
 * @param {() => number} inputFn
 * @param {(output: string) => void} outputFn
 * */
export async function RunInteractively(sourceCode, inputFn, outputFn) {
  let picoc = await PicoModule({
    print: outputFn,
    printErr: outputFn,
    stdin: inputFn,
  });

  picoc.FS.writeFile("/file.c", sourceCode);
  picoc.callMain(["file.c"]);
}
