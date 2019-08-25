const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import Edit from "./components/Edit";
import Save from "./components/Save";

const attributes = {
    content: {
        type: 'array',
        source: 'children',
        selector: 'p',
    }
};

registerBlockType( 'gutenberg201908/editable', {
    title: __( 'Editable', 'editable' ),
    category: 'common',
    attributes,
    edit: Edit,
    save: Save,
} );
