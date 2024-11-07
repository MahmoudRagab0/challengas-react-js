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
          <Post title='اكاديمية تريمز' content='اكاديمه مخصصه لتعليم البرمجه بمختلف لغاتها وتقنياتها'>
            <h1>20</h1>
          </Post>
          <Post title='hello world' content='this is the hello world article'/>
          <Post title='Post 3' content='this is the body post three'/>
          <Post title='Post 3'/>
        </div>
        <div style={{ width: "30%" }}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
