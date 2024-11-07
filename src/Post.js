export default function Post({ children, title, content = 'no content' }) {

    const post_style = {
        textAlign: "center",
        padding: "15px",
        marginBottom: "20px",
        border: "5px solid #007575"
    }
    return (
        <div style={post_style}>
            {children}
            <h2>{title}</h2>
            <hr style={{ margin: "10px" }} />
            <p>{content}</p>
        </div>
    )
}