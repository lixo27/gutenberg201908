const { RichText } = wp.editor;

const Edit = ( { attributes: { content }, setAttributes, className } ) => {

    const onChangeContent = newContent => {
        setAttributes( { newContent } );
    };

    return (
        <div className={ className }>
            <RichText tagName="p" value={ content } onChange={ onChangeContent }/>
        </div>
    );

};

export default Edit;
