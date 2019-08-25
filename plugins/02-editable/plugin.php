<?php
/**
 * Plugin Name: Gutenberg | 02-editable
 * Author:      Thiago Senna
 * Author URI:  http://thremes.com.br
 * Description: A gutenberg plugin with an editable block.
 * License:     GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

add_action( 'init', function () {

    wp_register_script(
        'gutenberg201908-editable',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor' ],
    );

    wp_register_style(
        'gutenberg201908-editable-screen',
        plugins_url( 'src/styles/screen.css', __FILE__ ),
    );

    wp_register_style(
        'gutenberg201908-editable-editor',
        plugins_url( 'src/styles/editor.css', __FILE__ ),
    );

    register_block_type( 'gutenberg201908/editable', [
        'style' => 'gutenberg201908-editable-screen',
        'editor_style' => 'gutenberg201908-editable-editor',
        'editor_script' => 'gutenberg201908-editable',
    ] );

} );