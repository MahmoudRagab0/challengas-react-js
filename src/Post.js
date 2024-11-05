export default function Post() {
    const post_style = {
        textAlign: "center",
        padding: "15px",
        marginBottom: "20px",
        border: "5px solid #007575"
    }
    return (
        <div style={post_style}>
            <h2>This is the post title</h2>
            <hr />
            <p>This is the post body</p>
        </div>
    )
}