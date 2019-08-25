import Editor from "./components/Editor";
import Screen from "./components/Screen";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg201908/editable', {
    title: __( 'Editable', 'editable' ),
    category: 'common',
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: '.editable__content',
        }
    },
    edit: Editor,
    save: Screen,
} );
