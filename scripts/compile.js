/* eslint-disable */

const gettext = require('gettext-parser');
const fs = require('fs');
const path = require('path');

const argv = require('yargs')
  .usage('Usage: nl.pot fr.pot [options]')
  .alias('output', 'o')
  .describe('output', 'The output folder')
  // .boolean('pseudo')
  .alias('pseudo', 'p')
  .describe('pseudo', 'Generate pseudo translation from specified .pot file')
  .demand(['output']).argv;

const destFolder = argv.output;

// pseudo translate
if (argv.pseudo) {
  const sourcePath = argv.pseudo;
  for (let language of argv._) {
    const destPath = path.join(destFolder, language + '.json');
    generateJsonFile(sourcePath, destPath);
  }
}

// PO translate
if (!argv.pseudo) {
  for (let sourcePath of argv._) {
    const fileName = path.basename(sourcePath, '.po');
    const destPath = path.join(destFolder, fileName + '.json');
    generateJsonFile(sourcePath, destPath);
  }
}

function generateJsonFile(sourcePath, destPath) {
  console.log(`${sourcePath} -> ${destPath}`);
  var input = fs.readFileSync(sourcePath);
  const json = parse(input);
  write(destPath, json);
}

function write(destPath, data) {
  const content = JSON.stringify(data, null, '\t');
  fs.writeFileSync(destPath, content);
}

function parse(contents) {
  let translations = {};
  const domain = '';

  const po = gettext.po.parse(contents, 'utf-8');
  if (!po.translations.hasOwnProperty(domain)) {
    return translations;
  }

  Object.keys(po.translations[domain]).forEach(key => {
    let translation = po.translations[domain][key].msgstr.pop();
    if (!translation) {
      // no translation found, use pseudo translation
      translation = pseudoTranslateText(key);
    }
    if (key.length > 0 && translation.length > 0) {
      translations[key] = translation;
    }
  });

  return translations;
}

function pseudoTranslateText(text) {
  const plMap = new Map([
    ['a', 'á'],
    ['b', 'b'],
    ['c', 'c'],
    ['d', 'd'],
    ['e', 'é'],
    ['f', 'f'],
    ['g', 'g'],
    ['h', 'h'],
    ['i', 'ï'],
    ['j', 'J'],
    ['k', 'k'],
    ['l', 'l'],
    ['m', 'm'],
    ['n', 'n'],
    ['o', 'ô'],
    ['p', 'p'],
    ['q', 'q'],
    ['r', 'r'],
    ['s', 's'],
    ['t', 't'],
    ['u', 'ú'],
    ['v', 'v'],
    ['w', 'w'],
    ['x', 'x'],
    ['y', 'y'],
    ['z', 'z'],
    ['A', 'Â'],
    ['B', 'B'],
    ['C', 'C'],
    ['D', 'D'],
    ['E', 'É'],
    ['F', 'F'],
    ['G', 'G'],
    ['H', 'H'],
    ['I', 'I'],
    ['J', 'J'],
    ['K', 'K'],
    ['L', 'L'],
    ['M', 'M'],
    ['N', 'N'],
    ['O', 'O'],
    ['P', 'P'],
    ['Q', 'Q'],
    ['R', 'R'],
    ['S', 'S'],
    ['T', 'T'],
    ['U', 'U'],
    ['V', 'V'],
    ['W', 'W'],
    ['X', 'X'],
    ['Y', 'Y'],
    ['Z', 'Z'],
  ]);

  let pause = false;
  return text.split('').reduce((str, char) => {
    if (/[a-zA-Z]/.test(char)) {
      str += plMap.get(char);
    } else {
      str += char;
    }
    return str;
  }, '');
}
