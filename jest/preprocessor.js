var babel = require("babel-jest");

module.exports = {
    process: function(src, filename) {
        if(!filename.match(/\.(css|scss|less|img|png|gif)$/))
            return babel.process(src, filename);
        return '';
    }
};
