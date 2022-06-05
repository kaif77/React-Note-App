import React from "react";
import InputBox from "../Elements/InputBox";
import MainButton from "../Elements/MainButton";
import "./Styles/NotePopUpStyles.css";

const NotePopUp = ({togglePopup}) => {
  return (
    <>
      <div className="popup-background">
        <div className="note-popup">
          <h1 className="heading">Add New Note</h1>
          <InputBox inputType="text" inputPlaceholder="Enter Note Title" />
          <textarea placeholder="Enter note details..."></textarea>
          <MainButton buttonText="Add Note" />
          <MainButton buttonText="Close" 
          clickFunc={togglePopup}/>
        </div>
      </div>
    </>
  );
};

export default NotePopUp;
