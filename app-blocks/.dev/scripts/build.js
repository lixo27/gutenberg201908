#!/usr/bin/env node
'use strict';

const crossEnv = require( 'cross-env' );

crossEnv( [
    'NODE_ENV=production',
    'node_modules/webpack/bin/webpack.js',
    '--no-progress',
    '--hide-modules',
    '--config=node_modules/laravel-mix/setup/webpack.config.js',
] );
