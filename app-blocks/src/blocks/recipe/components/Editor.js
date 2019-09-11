const { __ } = wp.i18n;

const { RichText } = wp.editor;
const { MediaUpload } = wp.editor;
const { Button } = wp.components;

const RecipeMediaButton = ( { recipeMediaID, recipeMediaURL, onClick } ) => (
    <Button className={ recipeMediaID ? 'image-button' : 'button' } onClick={ onClick }>

        { !recipeMediaID ? __( 'Upload Image', 'app-blocks' ) :
            <img src={ recipeMediaURL } alt={ __( 'Upload Recipe Image', 'app-blocks' ) }/> }

    </Button>
);

const RecipeMediaUpload = ( { recipeMediaID, recipeMediaURL, onSelect } ) => (
    <MediaUpload
        value={ recipeMediaID }
        onSelect={ onSelect }
        allowedTypes="image"
        render={ ( { open } ) => (
            <RecipeMediaButton
                recipeMediaID={ recipeMediaID }
                recipeMediaURL={ recipeMediaURL }
                onClick={ open }
            />
        ) }
    />
);

const Editor = (
    {
        attributes: {
            recipeTitle,
            recipeMediaID,
            recipeMediaURL,
        },
        className,
        setAttributes
    }
) => {

    const onChangeRecipeTitle = ( recipeTitle ) => {
        setAttributes( { recipeTitle } );
    };

    const onSelectRecipeImage = ( recipeMedia ) => {
        setAttributes( {
            recipeMediaID: recipeMedia.id,
            recipeMediaURL: recipeMedia.url,
        } );
    };

    return (
        <div className={ className }>

            <RichText
                tagName="h2"
                value={ recipeTitle }
                onChange={ onChangeRecipeTitle }
            />

            <RecipeMediaUpload
                recipeMediaID={ recipeMediaID }
                recipeMediaURL={ recipeMediaURL }
                onSelect={ onSelectRecipeImage }
            />

        </div>
    );
};

export default Editor;
