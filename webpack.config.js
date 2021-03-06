const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const plugins = [];
plugins.push(new CleanWebpackPlugin());
plugins.push(
    new HtmlWebpackPlugin({
        title: 'Hotel Website | Home',
        filename: 'index.html',
        template: './src/templates/index.pug',
    }),
    new HtmlWebpackPlugin({
        title: 'Hotel Website | Facilities',
        filename: 'facilities.html',
        template: './src/templates/facilities.pug'
    }),
    new HtmlWebpackPlugin({
        title: 'Hotel Website | Rooms',
        filename: 'rooms.html',
        template: './src/templates/rooms.pug'
    }),
    new HtmlWebpackPlugin({
        title: 'Hotel Website | Contact-us',
        filename: 'contact-us.html',
        template: './src/templates/contact-us.pug'
    }),
    );
if (!devMode) {
    // enable in production only
    plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins,
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.pug$/i,
                use: [
                    'pug-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/fonts'
                },
            },
        ]
    }
};