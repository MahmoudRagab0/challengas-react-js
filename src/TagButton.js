import "./TagButtonStyle.css"

export default function TagButton({title, children}) {
    return(
        <button className="tag-btn">{title} {children}</button>

    )
}