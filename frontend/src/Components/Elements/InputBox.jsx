import React from "react";

import { PropTypes } from "prop-types";

const InputBox = ({
  inputType,
  inputValue,
  inputPlaceholder,
  changeFunc,
}) => {
  return (
    <>
      <input
        className="textbox-custom"
        style={basicStyle}
        type={inputType}
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={changeFunc}
      />
    </>
  );
};

const basicStyle = {
  backgroundColor: "#ffffff",
  minWidth: "200px",
  padding: "12px",
  margin: "5px",
  fontSize: "0.9rem",
  outline: "none",
  border: "none",
  borderRadius: "5px",
  transition: "all 0.3s ease-in-out"
}

InputBox.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  inputPlaceholder: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired,
};

InputBox.defaultProps = {
  inputType: "text",
  inputPlaceholder: "Enter ...",
  changeFunc: () => console.log(),
};

export default InputBox;
