import Editor from "./components/Editor";
import Screen from "./components/Screen";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'app-blocks/hello', {
    title: __( 'Hello', 'app-blocks' ),
    category: 'app-blocks',
    edit: Editor,
    save: Screen,
} );
