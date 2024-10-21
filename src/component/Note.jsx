import { useNavigate } from "react-router-dom";
import "./Note.css";

function convertDate(date) {
  let a = "asdsd";
  if (date.length > 14) return date;
}

const Note = ({ note }) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav(`info/${note.id}`);
      }}
      className="noterap"
    >
      <span>{note.title} </span>
      <span className="date">
        {note.Editdate ? note.Editdate + " 수정됨" : note.Newdate + " 원본"}
      </span>
    </div>
  );
};

export default Note;
