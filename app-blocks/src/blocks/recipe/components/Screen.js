const { RichText } = wp.editor;

const Screen = ( { attributes: { recipeTitle } } ) => (
    <div>

        <RichText.Content tagName="h2" value={ recipeTitle }/>

    </div>
);

export default Screen;
