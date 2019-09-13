import RecipeMediaButton from "../RecipeMediaButton";

const { __ } = wp.i18n;
const { MediaUpload } = wp.editor;

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

export default RecipeMediaUpload;
