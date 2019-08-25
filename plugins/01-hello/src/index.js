const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import edit from "./components/edit";
import save from "./components/save";

registerBlockType( 'gutenberg201908/hello', {
    title: __( 'Hello', 'hello' ),
    category: 'common',
    edit,
    save,
} );
