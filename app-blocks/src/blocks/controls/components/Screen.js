const { RichText } = wp.editor;
const { getBlockDefaultClassName } = wp.blocks;

const Screen = ( { attributes: { content, alignment } } ) => {
    const className = getBlockDefaultClassName( 'app-blocks/controls' );
    const classModifier = `${ className }--${ alignment }`;

    return (
        <div className={ classModifier }>
            <RichText.Content
                tagName="p"
                value={ content }
            />
        </div>
    );
};

export default Screen;
