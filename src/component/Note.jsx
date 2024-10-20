import { useNavigate } from "react-router-dom"
import './Note.css'

function convertDate(value) {
    if (value instanceof Date) {
      return value.toISOString(); // Date 객체를 ISO 문자열로 변환
    }
    return value; // Date 객체가 아닌 경우 원래 값 반환
  }



const Note = ({note})=>{

    const nav = useNavigate();
    return (<div onClick={()=>{nav(`info/${note.id}`)}} className="noterap">
        <span>{note.title} </span>
        <span className="date">{note.Editdate ? convertDate(note.Editdate).slice(0,10) + " 수정됨" : convertDate(note.Newdate).slice(0,10) + " 원본"}</span>
        
    </div>)
}

export default Note