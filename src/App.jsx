import "./App.css";
import MaterialNavbar from "./components/Navbar";
import CommentBoxTextarea from "./components/Textbox";

function App() {
  return (
    <>
      <div>
        <MaterialNavbar titleProp="Home" />
      </div>
      <div className="m-10 flex justify-center p-10 ">
        <CommentBoxTextarea />
      </div>
    </>
  );
}

export default App;
