const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const screenCSSPlugin = new ExtractTextPlugin( {
    filename: './styles/screen.css',
} );

const editorCSSPlugin = new ExtractTextPlugin( {
    filename: './styles/editor.css',
} );

const extractConfig = {
    fallback: "style-loader",
    use: "css-loader",
};

module.exports = {
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /screen\.s?css$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract( extractConfig ),
            },
            {
                test: /editor\.s?css$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract( extractConfig ),
            },
        ]
    },
    plugins: [
        ...defaultConfig.plugins,
        screenCSSPlugin,
        editorCSSPlugin
    ],
};
