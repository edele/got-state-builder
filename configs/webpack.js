module.exports = {
    entry: './src/index.js',

    output: {
        filename: './public/scripts.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },

    devtool: 'eval-source-map'
}
