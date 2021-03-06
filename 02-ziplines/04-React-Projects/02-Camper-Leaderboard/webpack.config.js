var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname,
        filename: "index.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?presets[]=es2015&presets[]=react&presets[]=react-hmre"},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};