const { AlignmentToolbar } = wp.editor;
const { BlockControls } = wp.editor;
const { RichText } = wp.editor;

const Editor = ( { attributes: { content, alignment }, className, setAttributes } ) => {

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
            <div className={ className + ` alignment-${alignment}` }>
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
