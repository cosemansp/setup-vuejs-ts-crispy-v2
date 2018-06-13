/* eslint-disable */

const shell = require('shelljs');
const glob = require('glob');
const path = require('path');
const gettext = require('gettext-extractor');

const GettextExtractor = gettext.GettextExtractor;
const JsExtractors = gettext.JsExtractors;
const extractor = new GettextExtractor();
const parser = extractor.createJsParser([
  // Place all the possible expressions to extract here:
  JsExtractors.callExpression(['$t', '[this].$t', 'i18n.t'], {
    arguments: {
      text: 0,
    },
  }),
]);

const fs = require('fs');
const { parse } = require('@vue/component-compiler-utils');
const argv = require('yargs')
  .alias('output', 'o')
  .describe('output', 'The output file. It should be your template.pot')
  .alias('src', 's')
  .describe('src', 'The source folder for vue/html/js/ts files')
  .array('attrs')
  .demand(['src', 'output']).argv;

const outputFile = argv.output;
const srcFolder = argv.src;
const extractAttrs = argv.attrs;

// clean up
shell.rm('-f', outputFile);

// create output folder
let ouputFolder = path.dirname(outputFile);
if (!fs.existsSync(ouputFolder)) {
  fs.mkdirSync(ouputFolder);
}

// extract from *.vue files
const vueFiles = glob.sync(`${srcFolder}/**/*.vue`);
const vueContentList = vueFiles.map(file => {
  let content = fs.readFileSync(file, 'utf8');
  let filename = path.basename(file);
  return {
    content,
    filename,
  };
});

// parse vue files content
vueContentList.forEach(result => {
  parser.parseString(result.content, result.filename, {
    lineNumberStart: 0,
  });
});

// parse ts files
parser.parseFilesGlob('src/**/*.ts');

// save to output
extractor.savePotFile(outputFile);
extractor.printStats();
