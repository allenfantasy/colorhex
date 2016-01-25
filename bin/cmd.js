#!/usr/bin/env node
var program = require('commander');
var converter = require('..');

function colorList(val) {
  return val.split(',');
}

program
  .version(require('../package.json').version)
  .option('-x, --hex <hex>', 'Hex => RGB')
  .option('-c, --color <rgb>', 'RGB => Hex', colorList)
  .parse(process.argv);

if (program.hex) {
  console.log(converter.hex2color(program.hex))
}

if (program.color) {
  console.log(converter.color2hex(program.color))
}
