const fs = require('fs');

const replaceInFile = (file, replacements) => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [search, replace] of replacements) {
    content = content.replace(new RegExp(search, 'g'), replace);
  }
  fs.writeFileSync(file, content);
};

replaceInFile('src/index.css', [
  ['--color-fist-red: #E31B23;', '--color-fist-green: #4BE16E;'],
  ['--color-fist-red-hover: #C8151D;', '--color-fist-green-hover: #3AA953;']
]);

replaceInFile('src/App.tsx', [
  ['fist-red-hover', 'fist-green-hover'],
  ['fist-red', 'fist-green'],
  ['red-50', 'green-50'],
  ['red-100', 'green-100'],
  ['ColoredBlur', 'coloredBlur'] // no wait, feGaussianBlur result="coloredBlur" -> this shouldn't be touched unless it's red, it's just "colored"
]);

console.log('Done');
