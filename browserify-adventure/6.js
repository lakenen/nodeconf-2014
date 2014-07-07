var domify = require('domify');

module.exports = function Widget() {
    var el = domify('<div>Hello <span class="name"></span>!</div>');

    return {
        setName: function (str) {
            el.querySelector('.name').innerText = str;
        },
        appendTo: function (target) {
            target.appendChild(el);
        }
    };
};
