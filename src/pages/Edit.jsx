import { useContext,useState } from "react"
import { notesContext } from "../App";
import { useNavigate,useParams } from "react-router-dom";
import Header from "../component/Header";
const Edit = () =>{

        const {notes,EditNote,setNotes} = useContext(notesContext);
        const { id } = useParams();
        const now = notes.filter((i) => (Number(i.id) === Number(id)))
        const nav = useNavigate();
        const [newTitle,setNewTitle] = useState(now[0].title);
        const [newCont,setNewCont] = useState(now[0].content);

        
        
    
        
        
        return (
            <div>
                <Header leftChild={<button onClick={()=>{nav(-1)}}>{"<"}</button>} middleChild={"글쓰기" } rightChild={"👍"}/>
            <input value={newTitle} placeholder={"제목을 입력하시오"} onChange={(e)=>{setNewTitle(e.target.value)}}></input>
            <input value={newCont} placeholder={"내용을 입력하시오"} onChange={(e)=>{setNewCont(e.target.value)}}></input>
            <div>  <button onClick={()=>{EditNote(
            id,
              newTitle,
              newCont,
            notes,
            setNotes
          )
    nav(-1)
    
    }}>수정하기</button>   </div>
                
    </div>
        )
    }

export default Edit