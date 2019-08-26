import './styles/editor.css';
import './styles/screen.css';
import Editor from "./components/Editor";
import Screen from "./components/Screen";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg201908/controls', {
    title: __( 'Controls', 'controls' ),
    category: 'common',
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: '.controls__content',
        },
        alignment: {
            type: 'string',
            default: 'none',
        },
    },
    edit: Editor,
    save: Screen,
} );
