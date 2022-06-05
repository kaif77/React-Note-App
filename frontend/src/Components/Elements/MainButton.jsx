import React from "react";
import { PropTypes } from "prop-types";

const MainButton = ({buttonText,clickFunc}) => {
  return (
    <>
      <div
        className="button-custom"
        style={basicStyle}
        onClick={() => clickFunc()}
      >
        {buttonText}
      </div>
    </>
  );
};

const basicStyle = {
  display: "inline",
  backgroundColor: "#2f3542",
  color: "#ffffff",
  padding: "12px 20px",
  margin: "5px",
  fontSize: "0.9rem",
  textAlign: "center",
  outline: "none",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
};

MainButton.propTypes = {
  buttonText: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  clickFunc: PropTypes.func.isRequired,
};

MainButton.defaultProps = {
  buttonText: "Click Me",
  clickFunc: () => console.log("Button Clicked"),
};

export default MainButton;
