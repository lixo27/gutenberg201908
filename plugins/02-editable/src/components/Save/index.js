const { RichText } = wp.editor;

const Save = ( { attributes: content } ) => (
    <div>
        <RichText.Content tagName="p" value={ content }/>
    </div>
);

export default Save;
