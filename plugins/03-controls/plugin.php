<?php
/**
 * Plugin Name: Gutenberg | 03-controls
 * Author:      Thiago Senna
 * Author URI:  http://thremes.com.br
 * Description: A gutenberg plugin with a block that supports controls.
 * License:     GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

add_action( 'init', function () {

    wp_register_script(
        'gutenberg201908-controls',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor' ],
    );

    wp_register_style(
        'gutenberg201908-controls-screen',
        plugins_url( 'build/styles/screen.css', __FILE__ ),
    );

    wp_register_style(
        'gutenberg201908-controls-editor',
        plugins_url( 'build/styles/editor.css', __FILE__ ),
    );

    register_block_type( 'gutenberg201908/controls', [
        'style' => 'gutenberg201908-controls-screen',
        'editor_style' => 'gutenberg201908-controls-editor',
        'editor_script' => 'gutenberg201908-controls',
    ] );

} );
