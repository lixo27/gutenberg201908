const { RichText } = wp.editor;

const Editor = ( { attributes: { content }, className, setAttributes } ) => {

    const onChangeContent = ( content ) => {
        setAttributes( { content } );
    };

    return (
        <div className={ className }>
            <RichText
                tagName="p"
                className="editable__content"
                onChange={ onChangeContent }
                value={ content }
            />
        </div>
    );
};

export default Editor;
