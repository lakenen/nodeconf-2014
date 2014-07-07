var fs = require('fs');
var sprintf = require('sprintf');
var src = fs.readFileSync('/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');

var result = src.split(/\n/).map(function (line, i) {
    if (i % 5 === 0) {
        return sprintf('%3d %s', i, line);
    } else {
        return '    ' + line;
    }
}).join('\n');

console.log(result);
