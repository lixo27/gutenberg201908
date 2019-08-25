<?php
/**
 * Plugin Name: Gutenberg | 01-hello
 * Author:      Thiago Senna
 * Author URI:  http://thremes.com.br
 * Description: A gutenberg plugin with a hello block.
 * License:     GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

add_action( 'init', function () {

    wp_register_script(
        'gutenberg201908-hello',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-i18n' ],
    );

    wp_register_style(
        'gutenberg201908-hello-screen',
        plugins_url( 'src/styles/screen.css', __FILE__ ),
    );

    wp_register_style(
        'gutenberg201908-hello-editor',
        plugins_url( 'src/styles/editor.css', __FILE__ ),
    );

    register_block_type( 'gutenberg201908/hello', [
        'style' => 'gutenberg201908-hello-screen',
        'editor_style' => 'gutenberg201908-hello-editor',
        'editor_script' => 'gutenberg201908-hello',
    ] );

} );
