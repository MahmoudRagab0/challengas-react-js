import TagButton from "./TagButton"

export default function SideMenu() {
    const side_menu_style = {
        display: 'flex',
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        border: "5px solid #007575",
        padding: "10px",

    }
    return (
        <div style={side_menu_style}>
            <TagButton />
            <TagButton />
            <TagButton />
            <TagButton />
            <TagButton />
            <TagButton />
            <TagButton />
            <TagButton />
            <TagButton />
        </div>
    )
}