#!/usr/bin/env node
import spritePacker, { format } from '.';
import yargs from 'yargs';

const argv = yargs
  .strict()
  .parserConfiguration({ 'duplicate-arguments-array': false })
  .strictCommands()
  // .locale('en')
  .example('spritepacker', '-f "./*.png"')
  .option('file', {
    alias: 'f',
    type: 'string',
    demandOption: true,
    desc: 'Set input images path, support glob'
  })
  .option('maxWidth', {
    alias: 'w',
    type: 'number',
    default: 2048,
    desc: 'Set output image max width'
  })
  .option('maxHeight', {
    alias: 'h',
    type: 'number',
    default: 2048,
    desc: 'Set output image max height'
  })
  .option('format', {
    type: 'string',
    choices: Object.keys(format),
    default: 'JsonArray' as const,
    desc: 'Set output file type'
  })
  .option('outDir', {
    alias: 'o',
    type: 'string',
    default: './',
    desc: 'Set output file dir'
  })
  .option('name', {
    alias: 'n',
    type: 'string',
    default: 'spritesheet',
    desc: 'Set output file name'
  })
  .option('frameName', {
    alias: 'fn',
    type: 'string',
    default: '[dir][name][ext]',
    desc: 'Set frame name'
  })
  .option('border', {
    alias: 'b',
    type: 'number',
    default: 0,
    desc: 'Set image border'
  })
  .option('padding', {
    alias: 'p',
    type: 'number',
    default: 0,
    desc: 'Set frames spacing'
  })
  .option('sep', {
    alias: 's',
    type: 'string',
    default: '/',
    desc: 'Set file separator'
  })
  .version()
  .alias('version', 'v')
  .help('help')
  .parseSync();
(async () => {
  // console.log(argv);
  await spritePacker({
    file: argv.file,
    maxWidth: argv.maxWidth,
    maxHeight: argv.maxHeight,
    format: argv.format,
    outDir: argv.outDir,
    name: argv.name,
    frameName: argv.frameName,
    border: argv.border,
    padding: argv.padding,
    sep: argv.sep,
    saveFile: true
  });
})();
