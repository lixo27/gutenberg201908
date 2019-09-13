import RecipeMediaUpload from "./RecipeMediaUpload";

const { __ } = wp.i18n;
const { RichText } = wp.editor;

const Editor = (
    {
        attributes: {
            recipeTitle,
            recipeMediaID,
            recipeMediaURL,
            recipeIngredients,
            recipeInstructions
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

    const onChangeRecipeIngredients = ( recipeIngredients ) => {
        setAttributes( { recipeIngredients } );
    };

    const onChangeRecipeInstructions = ( recipeInstructions ) => {
        setAttributes( { recipeInstructions } );
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

            <h3>{ __( 'Ingredients', 'app-blocks' ) }</h3>

            <RichText
                tagName="ul"
                multiline="li"
                className="ingredients"
                value={ recipeIngredients }
                onChange={ onChangeRecipeIngredients }
            />

            <h3>{ __( 'Instructions', 'app-blocks' ) }</h3>

            <RichText
                tagName="div"
                multiline="p"
                className="steps"
                value={ recipeInstructions }
                onChange={ onChangeRecipeInstructions }
            />

        </div>
    );
};

export default Editor;
