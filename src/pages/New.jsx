import { useContext,useState } from "react"
import { notesContext } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";

const New = () =>{

    const {notes,NewNote,noteId,setNotes} = useContext(notesContext);
    const nav = useNavigate();
    const [newTitle,setNewTitle] = useState("");
    const [newCont,setNewCont] = useState("");

   
    
    return (
        <div>
          <Header leftChild={<button onClick={()=>{nav(-1)}}>{"<"}</button>} middleChild={"글쓰기" } rightChild={"👍"}/>
        <input value={newTitle} placeholder={"제목을 입력하시오"} onChange={(e)=>{setNewTitle(e.target.value)}}></input>
        <input value={newCont} placeholder={"내용을 입력하시오"} onChange={(e)=>{setNewCont(e.target.value)}}></input>
        <div>  <button onClick={()=>{NewNote(
        noteId.current++,
          newTitle,
          newCont,
        notes,
        setNotes
      )
nav(-1)

}}>글쓰기</button>   </div>
            
</div>
    )
}

export default New