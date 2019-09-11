const { __ } = wp.i18n;

const { RichText } = wp.editor;

const Screen = (
    {
        attributes: {
            recipeTitle,
            recipeMediaURL,
            recipeIngredients,
            recipeInstructions,
        }
    }
) => (
    <div>

        <RichText.Content tagName="h2" value={ recipeTitle }/>

        { recipeMediaURL && (
            <img src={ recipeMediaURL } alt={ __( 'Recipe Image', 'app-blocks' ) }/>
        ) }

        <RichText.Content tagName="ul" className="ingredients" value={ recipeIngredients }/>

        <RichText.Content tagName="div" className="instructions" value={ recipeInstructions }/>

    </div>
);

export default Screen;
