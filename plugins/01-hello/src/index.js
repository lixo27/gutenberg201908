import Editor from "./components/Editor";
import Screen from "./components/Screen";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg201908/hello', {
    title: __( 'Hello', 'hello' ),
    category: 'common',
    edit: Editor,
    save: Screen,
} );
