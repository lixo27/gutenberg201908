const { RichText } = wp.editor;

const Screen = ( { attributes: { title, mediaURL, ingredients, instructions }, className } ) => (
    <div className={ className }>

        <RichText.Content tagName="h2" value={ title }/>

        { mediaURL && (
            <img className="recipe__image" src={ mediaURL } alt={ __( 'Recipe Image', 'recipe' ) }/>
        ) }

        <RichText.Content tagName="h2" className="ingredients" value={ ingredients }/>
        <RichText.Content tagName="div" className="steps" value={ instructions }/>

    </div>
);

export default Screen;
