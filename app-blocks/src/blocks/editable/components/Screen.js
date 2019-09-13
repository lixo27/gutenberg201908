const { RichText } = wp.editor;

const Screen = ( { attributes: { content } } ) => (
    <div>
        <RichText.Content
            tagName="p"
            value={ content }
        />
    </div>
);

export default Screen;
