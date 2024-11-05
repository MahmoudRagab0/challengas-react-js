import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{
        width: "70%",
        display: 'flex',
        justifyContent: "center",
        gap: "20px",
        margin: "0 auto",
      }}>
        <div style={{
          flexBasis: "80%"
        }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div style={{ width: "30%" }}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
