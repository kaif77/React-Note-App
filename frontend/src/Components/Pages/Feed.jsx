import { useState, React } from "react";
import Footer from "../Sections/Footer";
import NavBar from "../Sections/NavBar";
import Note from "../Sections/Note";

import { ThemeContext } from "../../Contexts/ThemeContext";
import NotePopUp from "../Sections/NotePopUp";

const Feed = () => {
  // theme state
  const [theme, setTheme] = useState("light");

  // Popup State
  const [showPopup, setShowPopup] = useState(false);

  const togglePop = () => {
    setShowPopup(!showPopup);
  };

  const toggleTheme = () => {
    // DefaultTheme is light
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="feed" id={theme}>
          <NavBar openToggleFunc={togglePop} />
          <div className="note-area">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
          <Footer />
        </div>
        {showPopup && <NotePopUp togglePopup={togglePop} />}
      </ThemeContext.Provider>
    </>
  );
};

export default Feed;
