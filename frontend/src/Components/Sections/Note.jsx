import { RiEditLine, RiDeleteBin2Line } from "react-icons/ri";
import MainButton from "../Elements/MainButton";
import "./Styles/NotesStyles.css";

const Note = () => {
  return (
    <>
        <div className="note-section">
            <h1 className="title">
                This is a sample note.
            </h1>
            <p className="details">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis earum molestias iure rerum quas minima magni mollitia esse sapiente veritatis dicta cumque, minus explicabo sed?
            </p>
            <div className="note-buttons">
                <MainButton buttonText={<RiEditLine />} />
                <MainButton buttonText={<RiDeleteBin2Line />} />
            </div>
        </div>
    </>
  )
}

export default Note