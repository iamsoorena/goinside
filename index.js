#! /usr/bin/env node

var spawn = require('child_process').spawn;

var child = spawn(`docker`,
  [
    'exec',
    '-it',
    process.argv[2],
    process.argv[3] || 'bash',
   '-c',
   `stty cols ${process.stdout.columns} rows ${process.stdout.rows} && ${process.argv[3] || 'bash'}`
  ], {
    stdio: 'inherit'});