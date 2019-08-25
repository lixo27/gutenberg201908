const { RichText } = wp.editor;

const Screen = ( { attributes: { content } } ) => (
    <div>
        <RichText.Content
            tagName="p"
            className="editable__content"
            value={ content }
        />
    </div>
);

export default Screen;
