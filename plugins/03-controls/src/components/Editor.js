const {
    AlignmentToolbar,
    BlockControls,
    RichText,
} = wp.editor;

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
            <div className={ className }>
                <RichText
                    tagName="p"
                    className="controls__content"
                    style={ { textAlign: alignment } }
                    onChange={ onChangeContent }
                    value={ content }
                />
            </div>
        </div>
    );
};

export default Editor;
