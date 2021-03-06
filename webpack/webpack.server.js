const { root } = require('./helpers');

/**
 * This is a server config which should be merged on top of common config
 */

module.exports =  {
        entry: './src/main.server.ts',
        output: {
            libraryTarget: 'commonjs2',
            filename: 'server.js',
            publicPath: '/production/'
        },
        target: 'node'
    };