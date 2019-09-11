const { RichText } = wp.editor;

const Editor = ( { attributes: { recipeTitle }, className, setAttributes } ) => {

    const onChangeRecipeTitle = ( recipeTitle ) => {
        setAttributes( { recipeTitle } );
    };

    return (
        <div className={ className }>

            <RichText
                tagName="h2"
                value={ recipeTitle }
                onChange={ onChangeRecipeTitle }
            />

        </div>
    );
};

export default Editor;
