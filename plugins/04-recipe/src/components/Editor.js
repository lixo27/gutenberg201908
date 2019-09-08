const { __ } = wp.i18n;
const { MediaUpload } = wp.editor;
const { RichText } = wp.editor;
const { Button } = wp.components;

const Editor = ( {
                     attributes: {
                         title,
                         mediaID,
                         mediaURL,
                         ingredients,
                         instructions
                     },
                     className,
                     setAttributes
                 } ) => {

    const onChangeTitle = ( title ) => {
        setAttributes( { title } );
    };

    const onSelectImage = ( media ) => {
        setAttributes( {
            mediaURL: media.url,
            mediaID: media.id,
        } );
    };

    const onChangeIngredients = ( ingredients ) => {
        setAttributes( { ingredients } );
    };

    const onChangeInstructions = ( instructions ) => {
        setAttributes( { instructions } );
    };

    return (
        <div className={ className }>

            <RichText
                tagName="h2"
                placeholder={ __( 'Write Recipe title…', 'recipe' ) }
                value={ title }
                onChange={ onChangeTitle }
            />

            <MediaUpload
                onSelect={ onSelectImage }
                allowedTypes="image"
                value={ mediaID }
                render={ ( { open } ) => (
                    <Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
                        { !mediaID ? __( 'Upload Image', 'recipe' ) :
                            <img src={ mediaURL } alt={ __( 'Upload Recipe Image', 'recipe' ) }/> }
                    </Button>
                ) }
            />

            <h3>{ __( 'Ingredients', 'recipe' ) }</h3>

            <RichText
                tagName="ul"
                multiline="li"
                placeholder={ __( 'Write a list of ingredients…', 'recipe' ) }
                value={ ingredients }
                onChange={ onChangeIngredients }
                className="ingredients"
            />

            <h3>{ __( 'Instructions', 'recipe' ) }</h3>

            <RichText
                tagName="div"
                multiline="p"
                className="steps"
                placeholder={ __( 'Write the instructions…', 'recipe' ) }
                value={ instructions }
                onChange={ onChangeInstructions }
            />

        </div>
    );
};

export default Editor;
