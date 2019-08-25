const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import Edit from "./components/Edit";
import Save from "./components/Save";

registerBlockType( 'gutenberg201908/hello', {
    title: __( 'Hello', 'hello' ),
    category: 'common',
    edit: Edit,
    save: Save,
} );
