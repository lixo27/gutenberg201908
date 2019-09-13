const { AlignmentToolbar } = wp.editor;
const { BlockControls } = wp.editor;
const { RichText } = wp.editor;

const Editor = ( { attributes: { content, alignment }, className, setAttributes } ) => {
    const classModifier = `${ className }--${ alignment }`;

    const onChangeContent = ( content ) => {
        setAttributes( { content } );
    };

    const onChangeAlignment = ( alignment ) => {
        setAttributes( { alignment: alignment === undefined ? 'none' : alignment } );
    };

    return (
        <div>
            <BlockControls>
                <AlignmentToolbar
                    value={ alignment }
                    onChange={ onChangeAlignment }
                />
            </BlockControls>
            <div className={ `${ className } ${ classModifier }` }>
                <RichText
                    tagName="p"
                    onChange={ onChangeContent }
                    value={ content }
                />
            </div>
        </div>
    );
};

export default Editor;
