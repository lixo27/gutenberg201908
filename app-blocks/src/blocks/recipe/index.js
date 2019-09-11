import Screen from "./components/Screen";
import Editor from "./components/Editor";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'app-blocks/recipe', {
    title: __( 'Recipe', 'app-blocks' ),
    category: 'app-blocks',
    attributes: {
        recipeTitle: {
            type: 'array',
            source: 'children',
            selector: 'h2',
        },
        recipeMediaID: {
            type: 'number',
        },
        recipeMediaURL: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
    },
    edit: Editor,
    save: Screen,
} );
