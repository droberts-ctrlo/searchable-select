// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const { ProvidePlugin } = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const provideConfig = {
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
}

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new ProvidePlugin(provideConfig)
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/', '/dist/', '/src/**/*.test.*'],
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';        
    } else {
        config.mode = 'development';
    }
    return config;
};
