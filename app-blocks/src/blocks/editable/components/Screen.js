const { RichText } = wp.editor;

const Screen = ( { attributes: { content }, className } ) => (
    <div className={ className }>
        <RichText.Content
            tagName="p"
            value={ content }
        />
    </div>
);

export default Screen;