import Header from "../component/Header"
import { useContext } from "react"
import { notesContext } from "../App";
import Note from "../component/note";
import { useNavigate } from "react-router-dom";
import './Home.css'


const Home = () =>{

    const {notes} = useContext(notesContext);
    const nav = useNavigate();

    return (
        <div className="Home">
            <Header leftChild={"👍"} middleChild={"메모장"} rightChild={"❤️"}/>
            <div className="notewrap">
                {notes.map((note)=>{return <Note key={note.id} note = {note} />
                })}
            </div>
            <button className="newB" onClick={()=>{nav('/new')}}>
                글쓰기
            </button>
        </div>
    )

}

export default Home