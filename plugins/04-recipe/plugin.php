<?php
/**
 * Plugin Name: Gutenberg | 04-recipe
 * Author:      Thiago Senna
 * Author URI:  http://thremes.com.br
 * Description: A gutenberg plugin with a recipe block.
 * License:     GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

add_action( 'init', function () {

    wp_register_script(
        'gutenberg201908-recipe',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor' ],
    );

    wp_register_style(
        'gutenberg201908-recipe-screen',
        plugins_url( 'build/styles/screen.css', __FILE__ ),
    );

    wp_register_style(
        'gutenberg201908-recipe-editor',
        plugins_url( 'build/styles/editor.css', __FILE__ ),
    );

    register_block_type( 'gutenberg201908/recipe', [
        'style' => 'gutenberg201908-recipe-screen',
        'editor_style' => 'gutenberg201908-recipe-editor',
        'editor_script' => 'gutenberg201908-recipe',
    ] );

} );
