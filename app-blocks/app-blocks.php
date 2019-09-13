<?php
/**
 * Plugin Name: App Blocks
 * Author:      Thiago Senna
 * Author URI:  http://thremes.com.br
 * Description: The application blocks plugin.
 * License:     GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package   App\Blocks
 */

define( 'APP_BLOCKS_PLUGIN', true );
define( 'APP_BLOCKS_PLUGIN_FILE', __FILE__ );

add_action( 'init', function () {

    wp_register_script(
        'app-blocks',
        plugins_url( 'build/index.js', APP_BLOCKS_PLUGIN_FILE ),
        [ 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor', 'underscore' ]
    );

    wp_register_style(
        'app-blocks-screen',
        plugins_url( 'build/styles/screen.css', APP_BLOCKS_PLUGIN_FILE )
    );

    wp_register_style(
        'app-blocks-editor',
        plugins_url( 'build/styles/editor.css', APP_BLOCKS_PLUGIN_FILE )
    );

    register_block_type( 'app-blocks/app', [
        'style' => 'app-blocks-screen',
        'editor_style' => 'app-blocks-editor',
        'editor_script' => 'app-blocks',
    ] );

} );

add_filter( 'block_categories', function ( $categories ) {

    return array_merge( $categories, [
        [
            'slug' => 'app-blocks',
            'title' => 'App Blocks',
            'icon' => null,
        ]
    ] );

} );
