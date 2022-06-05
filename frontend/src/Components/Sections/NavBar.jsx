import {
  MdHome,
  MdAddToPhotos,
  MdViewStream,
  MdDarkMode,
  MdWbSunny,
  MdMotionPhotosOff,
} from "react-icons/md";
import { useContext } from "react";
import InputBox from "../Elements/InputBox";
import "./Styles/NavBarStyles.css";
import MainButton from "../Elements/MainButton";
import ToolTip from "../Elements/ToolTip";

import { ThemeContext } from "../../Contexts/ThemeContext";

const NavBar = ({openToggleFunc}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="navbar-section">
        <div className="search">
          <InputBox inputType="text" inputPlaceholder="Search Notes .." />
        </div>
        <div className="menu">
          <ToolTip toolTiptext="All Notes">
            <MainButton buttonText={<MdHome />} />
          </ToolTip>
          <ToolTip toolTiptext="Add Notes">
            <MainButton buttonText={<MdAddToPhotos />} 
            clickFunc={openToggleFunc}/>
          </ToolTip>
          <ToolTip toolTiptext="My Notes">
            <MainButton buttonText={<MdViewStream />} />
          </ToolTip>
          <ToolTip
            toolTiptext={
              theme === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode"
            }
          >
            <MainButton
              buttonText={theme === "light" ? <MdDarkMode /> : <MdWbSunny />}
              clickFunc={toggleTheme}
            />
          </ToolTip>
          <ToolTip toolTiptext="Logout">
            <MainButton buttonText={<MdMotionPhotosOff />} />
          </ToolTip>
        </div>
      </div>
    </>
  );
};

export default NavBar;
