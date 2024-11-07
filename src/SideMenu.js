import TagButton from "./TagButton";

export default function SideMenu() {
  const buttons = [
    {
      id: 1,
      title: "جديده",
      emoji: <span>🔥🔥🔥</span>,
      img: (
        <img
          style={{ width: "100%" }}
          src="https://st3.depositphotos.com/5852012/15878/v/1600/depositphotos_158781058-stock-illustration-photo-gallery-flat-icon-with.jpg"
          alt="img"
        />
      )
    },
    {
      id: 2,
      title: "الاكثر قراءه",
      emoji: <span>🔥</span>,
    },
    {
      id: 3,
      title: "مقالات مميزه",
    },
  ];

  const buttonsMAPS = buttons.map((btn) => {
    return (
      <TagButton key={btn.id} title={btn.title}>
        <div>
          {btn.emoji}
          {btn.img}
        </div>
      </TagButton>
    );
  });

  return (
    <div className="box-btns">
      {buttonsMAPS}
    </div>
  );
}
