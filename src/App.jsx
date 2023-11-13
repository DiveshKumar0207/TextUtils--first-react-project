import { useState } from "react";
import "./App.css";
import MaterialNavbar from "./components/Navbar";
import CommentBoxTextarea from "./components/Textbox";
import AlertCustomStyles from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [lightIcon, setlightIcon] = useState("hidden");
  const [darkIcon, setdarkIcon] = useState(null);
  const [alert, setAlert] = useState({
    state: "hidden",
    message: null,
  });

  const toggleAlert = (usermsg) => {
    setAlert({
      state: null,
      message: usermsg,
    });

    setTimeout(() => {
      setAlert({
        state: "hidden",
        message: null,
      });
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      setlightIcon("hidden");
      setdarkIcon(null);

      setTimeout(() => {
        toggleAlert("Light mode enabled");
      }, 150);
    } else {
      setmode("dark");
      setlightIcon(null);
      setdarkIcon("hidden");

      setTimeout(() => {
        toggleAlert("Dark mode enabled");
      }, 150);
    }

    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
      <div
        className={`${mode} dark:text-textColor-high dark:brightness-[80%] dark:contrast-[1.2]`}
      >
        <div>
          <MaterialNavbar
            ToggleMode={togglemode}
            lightIcon={lightIcon}
            darkIcon={darkIcon}
          />
        </div>

        <AlertCustomStyles mode={mode} alert={alert} />

        <div className=" m-10 flex justify-center p-10">
          <CommentBoxTextarea toggleAlert={toggleAlert} />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
