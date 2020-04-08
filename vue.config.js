const env = require('./package').env;

const publicPathMapper = {
    dev: '',
    stg: '/stg/web',
    prod: '/F2E_Card/',
};

module.exports = {
    publicPath: publicPathMapper[env],
};
