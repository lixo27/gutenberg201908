const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const edit = () => (
    <div>hello, world! (but from editor)</div>
);

const save = () => (
    <div>hello, world! (but from front)</div>
);

registerBlockType( 'gutenberg201908/hello', {
    title: __( 'Hello', 'hello' ),
    category: 'layout',
    edit,
    save,
} );
