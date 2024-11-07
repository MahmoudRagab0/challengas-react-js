import TagButton from "./TagButton"

export default function SideMenu() {
    return (
        <div className="box-btns">
            <TagButton title='جديده' />
            <TagButton title='الاكثر قراءه'>
            <div>
                <span>🔥🔥🔥</span>
                <img style={{ width: "100%" }} src="https://st3.depositphotos.com/5852012/15878/v/1600/depositphotos_158781058-stock-illustration-photo-gallery-flat-icon-with.jpg" alt="img"/>
            </div>
            </TagButton>
            <TagButton title='مقالات مميزه' />
        </div>
    )
}