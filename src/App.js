import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
function App() {
  const postsList = [
    {
      id: 1,
      title: "اكاديمية تريمز",
      content: "اكاديمه مخصصه لتعليم البرمجه بمختلف لغاتها وتقنياتها",
    },
    {
      id: 2,
      title: "hello world",
      content: "this is the hello world article",
    },
    {
      id: 3,
      title: "Post 3",
      content: "this is the body post three",
    },
    {
      id: 4,
      title: "Post 4",
      content: "",
    },
  ];

  const post = postsList.map((post) => {
    return <Post key={post.id} title={post.title} content={post.content} />;
  });

  return (
    <div className="App">
      <Header />
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "0 auto",
        }}
      >
        <div style={{ flexBasis: "70%" }}>{post}</div>

        <div style={{ flexBasis: "30%" }}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
