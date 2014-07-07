var through = require('through2');

module.exports = function (file) {
    if (!/\.txt$/.test(file)) {
        return through();
    }

    return stream;
};
