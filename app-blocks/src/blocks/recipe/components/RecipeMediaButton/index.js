const { __ } = wp.i18n;
const { Button } = wp.components;

const RecipeMediaButton = ( { recipeMediaID, recipeMediaURL, onClick } ) => (
    <Button className={ recipeMediaID ? 'image-button' : 'button' } onClick={ onClick }>

        { !recipeMediaID ? __( 'Upload Image', 'app-blocks' ) :
            <img src={ recipeMediaURL } alt={ __( 'Upload Recipe Image', 'app-blocks' ) }/> }

    </Button>
);

export default RecipeMediaButton;
