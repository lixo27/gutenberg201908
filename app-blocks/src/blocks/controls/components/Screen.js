const { RichText } = wp.editor;

const Screen = ( { attributes: { content, alignment } } ) => (
    <div className={ `alignment-${ alignment }` }>
        <RichText.Content
            tagName="p"
            value={ content }
        />
    </div>
);

export default Screen;
