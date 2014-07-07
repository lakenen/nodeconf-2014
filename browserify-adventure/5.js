var url = require('url');

var u = prompt('url plz');

var parsed = url.parse(u, true);
console.log(url.resolve(parsed.href, parsed.query.file));
