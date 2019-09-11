const { __ } = wp.i18n;

const { RichText } = wp.editor;

const Screen = ( { attributes: { recipeTitle, recipeMediaURL } } ) => (
    <div>

        <RichText.Content tagName="h2" value={ recipeTitle }/>

        { recipeMediaURL && (
            <img src={ recipeMediaURL } alt={ __( 'Recipe Image', 'app-blocks' ) }/>
        ) }

    </div>
);

export default Screen;
