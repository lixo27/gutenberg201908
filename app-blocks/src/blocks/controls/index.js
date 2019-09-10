import Editor from "./components/Editor";
import Screen from "./components/Screen";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'app-blocks/controls', {
    title: __( 'Controls', 'app-blocks' ),
    category: 'app-blocks',
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
        alignment: {
            type: 'string',
            default: 'none',
        },
    },
    edit: Editor,
    save: Screen,
} );
