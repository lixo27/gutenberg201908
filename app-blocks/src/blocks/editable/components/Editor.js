const { RichText } = wp.editor;

const Editor = ( { attributes: { content }, className, setAttributes } ) => {

    const onChangeContent = ( content ) => {
        setAttributes( { content } );
    };

    return (
        <div className={ className }>
            <RichText
                tagName="p"
                onChange={ onChangeContent }
                value={ content }
            />
        </div>
    );
};

export default Editor;
