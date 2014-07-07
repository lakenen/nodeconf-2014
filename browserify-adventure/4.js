var ndjson = require('./ndjson');

console.log(ndjson.parse(prompt('str plz')));
console.log(ndjson.stringify(prompt('arr plz')));


