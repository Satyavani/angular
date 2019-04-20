const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'), // specifies where to place dynamically generated files
        publicPath: 'dist/' // specifies folder under which dynamic generated content like images/css etc files are available
    },
    mode: 'none',
    module: {
        rules:[{
            test: /\.(jpg|png)$/,
            use: [
                'file-loader'
            ]
        }]
    }
};