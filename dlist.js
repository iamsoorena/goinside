#! /usr/bin/env node

var exec = require('child_process').exec;

var child = exec(`docker ps ${process.argv[2] || ''} --format 'table{{.Image}}\t{{.Names}}\t{{.RunningFor}}\t{{.Status}}'`, function(
    err,
    stdout,
    stderr
  ) {
    console.log(stdout);
  });