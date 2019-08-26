import "./styles/editor.scss";
import "./styles/style.scss";
import Screen from "./components/Screen";
import Editor from "./components/Editor";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gutenberg201908/recipe', {
    title: __( 'Recipe', 'recipe' ),
    category: 'common',
    attributes: {
        title: {
            type: 'array',
            source: 'children',
            selector: 'h2',
        },
        mediaID: {
            type: 'number',
        },
        mediaURL: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
        ingredients: {
            type: 'array',
            source: 'children',
            selector: '.ingredients',
        },
        instructions: {
            type: 'array',
            source: 'children',
            selector: '.steps',
        },
    },
    edit: Editor,
    save: Screen,
} );
