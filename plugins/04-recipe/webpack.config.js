const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
              test: /screen\.s?css$/,
              exclude: /(node_modules)/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: 'build/',
                  },
                },
                'style-loader',
                'css-loader',
                'sass-loader',
              ],
            },
        ]
    },
    plugins: [
        ...defaultConfig.plugins,
        new MiniCssExtractPlugin({
          filename: 'screen.css',
        }),
    ],
};
