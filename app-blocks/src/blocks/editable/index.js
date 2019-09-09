import Editor from "./components/Editor";
import Screen from "./components/Screen";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'app-blocks/editable', {
    title: __( 'Editable', 'app-blocks' ),
    category: 'app-blocks',
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        }
    },
    edit: Editor,
    save: Screen,
} );
