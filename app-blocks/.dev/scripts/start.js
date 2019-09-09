#!/usr/bin/env node
'use strict';

const crossEnv = require( 'cross-env' );

crossEnv( [
    'NODE_ENV=development',
    'node_modules/webpack/bin/webpack.js',
    '--progress',
    '--hide-modules',
    '--config=node_modules/laravel-mix/setup/webpack.config.js',
    '--watch'
] );
