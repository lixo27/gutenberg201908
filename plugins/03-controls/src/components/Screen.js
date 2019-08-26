const { RichText } = wp.editor;

const Screen = ( { attributes: { content, alignment } } ) => (
    <div>
        <RichText.Content
            tagName="p"
            className={ `controls__content controls__content--${ alignment }` }
            value={ content }
        />
    </div>
);

export default Screen;
