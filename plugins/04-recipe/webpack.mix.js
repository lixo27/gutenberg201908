const mix = require('laravel-mix');

mix.react('src/index.js', 'build/');
mix.sass('src/styles/editor.scss', 'build/styles');
mix.sass('src/styles/screen.scss', 'build/styles');
