

module.exports=function (db, date, cb) {
    var count = 0;
    db.createReadStream({ start: date }).on('data', function (data) {
        count++;
    })
    .on('error', cb)
    .on('end', function () {
        cb(null, count);
    });
};
